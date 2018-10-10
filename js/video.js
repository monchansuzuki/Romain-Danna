let video = document.getElementById('my-video');
let btn = document.getElementById('demuted');

btn.addEventListener("click", function () {
    video.muted = false;
    video.style.width = "100%";
    btn.style.display = 'none';
})