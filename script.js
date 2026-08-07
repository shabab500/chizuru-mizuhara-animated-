const video = document.getElementById("bgVideo");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    video.muted = false;
    video.play();
    btn.style.display = "none";
});