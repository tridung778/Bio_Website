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

// Open popup

let form_popup = document.getElementById("form_popup");
let content = document.getElementById("content");

function showPopup() {
  form_popup.classList.add("form-popup-open");

  content.style.filter = "brightness(0.5) blur(10px)";
}

function closePopup() {
  form_popup.classList.remove("form-popup-open");
  content.style.filter = "none";
}

function openLink(link) {
  window.open(link, "_blank");
}
