var videoModal = document.getElementById('videoModal');
var video = document.getElementById('video');
function closeModal() {
    var _a;
    (_a = video === null || video === void 0 ? void 0 : video.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    videoModal.hidden = true;
    document.body.style.overflowY = 'auto';
}
function openModal() {
    var _a;
    videoModal.hidden = false;
    document.body.style.overflowY = 'hidden';
    (_a = video === null || video === void 0 ? void 0 : video.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
