const recordBtn = document.querySelector(".record");
const stopBtn = document.querySelector(".stop");
const container = document.querySelector(".audioContainer");
const recording = document.querySelector(".recording");
stopBtn.disabled = true;
let timer;
if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true };
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {       //getting permission
    const mediaRecorder = new MediaRecorder(stream);
    let chunks = []
    recordBtn.onclick = () => {
      container.innerHTML='';
      recordBtn.disabled = true;
      stopBtn.disabled = false;
      mediaRecorder.start();
      recordBtn.style.backgroundColor = '#008000';
      let time=1;
      timer = setInterval(()=>{
        recording.innerHTML = `Recording : ${time} seconds`
        time++;
      }, 1000);
    }
    stopBtn.onclick = () => {
      recordBtn.disabled = false;
      stopBtn.disabled = true;
      mediaRecorder.stop();
      recordBtn.style.backgroundColor = '#90ff7a';
      clearInterval(timer);
    }
    mediaRecorder.onstop = () => {
      const audio = document.createElement('audio');
      audio.setAttribute('controls', '');
      audio.controls = true;
      const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      const audioUrl = window.URL.createObjectURL(blob);
      audio.src = audioUrl;
      container.appendChild(audio);
      chunks = [];
    }
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    }
  });
}
else {
  console.log('Media Not Supported!!!');
}