// command line
// ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -c:a aac -map 0:v -map 1:a output.mp4

const ffmpeg = require('fluent-ffmpeg');
const audioInputPath = 'audio.mp3';
const videoInputPath = 'video.mp4';
const outputPath = 'output.mp4';
const command = ffmpeg(); 
command.input(videoInputPath);
command.input(audioInputPath);
command
      .videoCodec('copy')
      .audioCodec('aac')
      .outputOptions('-map 0:v') 
      .outputOptions('-map 1:a')
      .save(outputPath)
      .on('end', ()=>{
        console.log("merge Complete");
      })
      .on('error', (err)=>{
        console.log(err);
      });