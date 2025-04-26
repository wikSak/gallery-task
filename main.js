var closeButton = document.getElementById('closeModal');
var videoButton = document.getElementById('videoButton');
var videoModal = document.getElementById('videoModal');
var video = document.getElementById('video');
var videoSrc = 'https://www.youtube.com/embed/x6iyz1AQhuU?autoplay=1';
function closeModal() {
    videoModal.hidden = true;
    video.src = '';
    document.body.style.overflowY = 'auto';
    videoButton.focus();
}
closeButton.addEventListener('click', function () {
    closeModal();
});
videoButton.addEventListener('click', function () {
    videoModal.hidden = false;
    document.body.style.overflowY = 'hidden';
    video.src = videoSrc;
    closeButton.focus();
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
