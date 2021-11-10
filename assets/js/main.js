const musicBox = document.querySelector(".musicbox");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

const cover = document.querySelector("#cover");
const musicName = document.querySelector(".musicName");
const artistName = document.querySelector(".artistName");
const audio = document.querySelector("#audio");
// end select

// Musics Info
const musics = ["Sher Yadom Raft", "Gole Yakh", "Meez-E-Dotaei", "Ghoozake Pa"];

const artists = [
  "Siriya Ensemble",
  "Kourosh Yaghmaei",
  "Siriya-Ensemble",
  "Fereidoon Foroughi",
];

// initials
let musicIndex = 0;
let artistIndex = 0;

// functions
function loadMusic(music, artist) {
  musicName.textContent = music;
  artistName.textContent = artist;
  cover.src = `assets/images/${artist}.jpg`;
  audio.src = `assets/mp3s/${music}.mp3`;
}

loadMusic(musics[musicIndex], artists[artistIndex]);

function playMusic() {
  musicBox.classList.add("play");
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  audio.play();
}

function pauseMusic() {
  musicBox.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function prevMusic() {
  musicIndex--;
  artistIndex--;

  if (musicIndex < 0) musicIndex = musics.length - 1;
  if (artistIndex < 0) artistIndex = artists.length - 1;

  loadMusic(musics[musicIndex], artists[artistIndex]);
  audio.play();

  playBtn.querySelector("i").classList.add("fa-pause");
  playBtn.querySelector("i").classList.remove("fa-play");
}

function nextMusic() {
  musicIndex++;
  artistIndex++;

  if (musicIndex > musics.length - 1) musicIndex = 0;
  if (artistIndex > musics.length - 1) artistIndex = 0;

  loadMusic(musics[musicIndex], artists[artistIndex]);
  audio.play();

  playBtn.querySelector("i").classList.add("fa-pause");
  playBtn.querySelector("i").classList.remove("fa-play");
}

// listeners

playBtn.addEventListener("click", () => {
  const isPlaying = musicBox.classList.contains("play");
  if (isPlaying) pauseMusic();
  else playMusic();
});

prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);

// ========------- 3d effect ------========
const imgContainer = document.querySelector(".imgContainer");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");

VanillaTilt.init(imgContainer),
  {
    max: 10,
    speed: 400,
  // transition: true,
  };

VanillaTilt.init(circle1),
  {
    max: 25,
    speed: 400,
  };

VanillaTilt.init(circle2),
  {
    max: 25,
    speed: 400,
};
  
// END