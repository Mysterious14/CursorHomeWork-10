const KSound = document.querySelector('[KSound]');
const ASound = document.querySelector('[ASound]');
const MSound = document.querySelector('[MSound]');
const NSound = document.querySelector('[NSound]');
const OSound = document.querySelector('[OSound]');
const QSound = document.querySelector('[QSound]');
const PSound = document.querySelector('[PSound]');
const LSound = document.querySelector('[LSound]');
const BSound = document.querySelector('[BSound]');
const YSound = document.querySelector('[YSound]');

let audio = new Audio();

KSound.addEventListener('click', () => {
  NonActive();
  NonActive();
  KSound.classList.add('active');
  audio.src = 'audio/KAudio.mp3';
  audio.autoplay = true;
});

ASound.addEventListener('click', () => {
  NonActive();
  ASound.classList.add('active');
  audio.src = 'audio/AAudio.mp3';
  audio.autoplay = true;
});

MSound.addEventListener('click', () => {
  NonActive();
  MSound.classList.add('active');
  audio.src = 'audio/MAudio.mp3';
  audio.autoplay = true;
});
NSound.addEventListener('click', () => {
  NonActive();
  NSound.classList.add('active');
  audio.src = 'audio/NAudio.mp3';
  audio.autoplay = true;
});
YSound.addEventListener('click', () => {
  NonActive();
  YSound.classList.add('active');
  audio.src = 'audio/YAudio.mp3';
  audio.autoplay = true;
});
OSound.addEventListener('click', () => {
  NonActive();
  OSound.classList.add('active');
  audio.src = 'audio/OAudio.mp3';
  audio.autoplay = true;
});
QSound.addEventListener('click', () => {
  NonActive();
  QSound.classList.add('active');
  audio.src = 'audio/QAudio.mp3';
  audio.autoplay = true;
});
PSound.addEventListener('click', () => {
  NonActive();
  PSound.classList.add('active');
  audio.src = 'audio/PAudio.mp3';
  audio.autoplay = true;
});
LSound.addEventListener('click', () => {
  NonActive();
  LSound.classList.add('active');
  audio.src = 'audio/LAudio.mp3';
  audio.autoplay = true;
});
BSound.addEventListener('click', () => {
  NonActive();
  audio.src = 'audio/BAudio.mp3';
  BSound.classList.add('active');
  audio.autoplay = true;
});

document.body.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'KeyK':
      NonActive();
      KSound.classList.add('active');

      audio.src = 'audio/KAudio.mp3';
      break;
    case 'KeyA':
      NonActive();
      ASound.classList.add('active');

      audio.src = 'audio/AAudio.mp3';
      break;
    case 'KeyM':
      NonActive();
      MSound.classList.add('active');
      audio.src = 'audio/MAudio.mp3';
      break;
    case 'KeyN':
      NonActive();
      NSound.classList.add('active');
      audio.src = 'audio/NAudio.mp3';
      break;
    case 'KeyY':
      NonActive();
      YSound.classList.add('active');
      audio.src = 'audio/YAudio.mp3';
      break;
    case 'KeyL':
      NonActive();
      LSound.classList.add('active');
      audio.src = 'audio/LAudio.mp3';
      break;
    case 'KeyB':
      NonActive();
      BSound.classList.add('active');
      audio.src = 'audio/BAudio.mp3';
      break;
    case 'KeyP':
      NonActive();
      PSound.classList.add('active');
      audio.src = 'audio/PAudio.mp3';
      break;
    case 'KeyQ':
      NonActive();
      QSound.classList.add('active');
      audio.src = 'audio/QAudio.mp3';
      break;
    case 'KeyO':
      NonActive();
      OSound.classList.add('active');
      audio.src = 'audio/OAudio.mp3';
    default:
      break;
  }
  audio.autoplay = true;
});

function NonActive() {
  KSound.classList.remove('active');
  KSound.classList.remove('active');
  ASound.classList.remove('active');
  MSound.classList.remove('active');
  NSound.classList.remove('active');
  YSound.classList.remove('active');
  OSound.classList.remove('active');
  QSound.classList.remove('active');
  PSound.classList.remove('active');
  LSound.classList.remove('active');
  BSound.classList.remove('active');
}
