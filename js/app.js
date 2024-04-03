var video = document.getElementById("myVideo");
var playButton = document.querySelector(".play-button");
var icon = document.getElementById("icon");

document.addEventListener("DOMContentLoaded", () => {
  icon.classList.add("fa-play");
});

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    video.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});

video.addEventListener("play", function () {
  icon.classList.remove("fa-play");
  icon.classList.add("fa-pause");
});

video.addEventListener("pause", function () {
  icon.classList.remove("fa-pause");
  icon.classList.add("fa-play");
});
