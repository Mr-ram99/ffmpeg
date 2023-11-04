const playbtn = document.querySelector(".play")
const pausebtn = document.querySelector(".pause")
const startContext = document.querySelector(".startContext")
let audioContext, audio, source, volume, mediaStream;
startContext.addEventListener('click', ()=>{
  console.log(navigator.mediaDevices.getUserMedia({audio: true}));
  audioContext = new AudioContext();
  console.log('audio Context Started');
  console.log(audioContext);
  audio = new Audio('audio.mp3');
  source = audioContext.createMediaElementSource(audio);
  volume = audioContext.createGain();
  volume.gain.value = 1;
  source.connect(volume);
  volume.connect(audioContext.destination);
})

playbtn.addEventListener('click', ()=>{
  audio.play();
})
pausebtn.addEventListener('click', ()=>{
  audio.pause();
})