var arr = [
  {
    songName: "The Night We Met",
    url: "./audio/The-Night-We-Met.mp3",
    img: "./images/thenight.jpeg",
  },
  {
    songName: "Until I Found You",
    url: "./audio/Until I Found You.mp3",
    img: "./images/until.jpg",
  },
  {
    songName: "Let Her Go",
    url: "./audio/Let Her Go.mp3",
    img: "./images/lether.jpg",
  },
  {
    songName: "Saudebaazi",
    url: "./audio/saudebaazi.mp3",
    img: "./images/saudebaazi.jpg",
  },
];

let flag = 0;
let allSongs = document.querySelector("#all-songs");
let audio = new Audio();
let selectedSong = 0;
let poster = document.querySelector("#left");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let previous = document.querySelector("#previous");

function mainFunc() {
  var clutter = "";
  arr.forEach((objs, index) => {
    clutter += `<div id="${index}" class="song-card">
        <div class="part1" >
        <img src=${objs.img} alt="">
        <h2>${objs.songName}</h2>
        </div>
        <h6>3:29</h6>
        </div>
        `;
  });

  allSongs.innerHTML = clutter;
  // playSelection();
}
mainFunc();

function playSelection() {
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
  audio.src = arr[selectedSong].url;
  if(flag==1)
  audio.play();
}

allSongs.addEventListener("click", (detail) => {
  selectedSong = detail.target.id;
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  flag = 1;
  playSelection();
});

play.addEventListener("click", () => {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
    playSelection();
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    flag = 0;
    audio.pause();
  }
});

next.addEventListener("click", () => {
  selectedSong = (selectedSong + 1) % arr.length;
  // if (flag == 1) {
    playSelection();
  // }
});
previous.addEventListener("click", () => {
  if (selectedSong > 0) {
    selectedSong = selectedSong - 1;
  } else {
    selectedSong = arr.length;
  }
  // if (flag == 1) {
    playSelection();
  
});
