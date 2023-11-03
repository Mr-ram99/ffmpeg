// command line
// ffmpeg -i videoplayback.mp4 -c:v libx264 -c:a aac -vf subtitles=captions.srt withSub.mp4

const ffmpeg = require('fluent-ffmpeg');
const command = ffmpeg();
const captions = 'captions.srt';
command
      .input('videoplayback.mp4')
      .videoCodec('libx264')
      .audioCodec('aac')
      .outputOptions('-vf subtitles='+captions)
      .save('withSub.mp4')
      .on('end', ()=>{
        console.log("subtitle added");
      })
      .on('error', (err)=>{
        console.log(err);
      });
