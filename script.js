const menuBtn = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const playBtn = document.getElementById("play");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");
function toggle() {
  menuBtn.classList.toggle("active");
  console.log("toggled");
  navigation.classList.toggle("active");
}

function playVid() {
  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause;
}
