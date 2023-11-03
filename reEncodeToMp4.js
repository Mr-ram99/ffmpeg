// command line
// ffmpeg -i sample.avi -c:v libx264 -c:a aac reencoded.mp4

const ffmpeg = require('fluent-ffmpeg');
const command = ffmpeg();
command
      .input('sample.avi')
      .videoCodec('libx264')
      .audioCodec('aac')
      .save('reencoded.mp4')
      .on('end', ()=>{
        console.log('video re-encoded to mp4');
      })
      .on('error',(err)=>{
        console.log(err);
      })