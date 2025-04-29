const videoModal = document.getElementById('videoModal') as HTMLElement;
const video = document.getElementById('video') as HTMLIFrameElement;

function closeModal() {
    video?.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    videoModal.hidden = true;
    document.body.style.overflowY = 'auto';
}

function openModal() {
    videoModal.hidden = false;
    document.body.style.overflowY = 'hidden';
    video?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}    

document.addEventListener('keydown', (event)=> {
    if(event.key === 'Escape') {
        closeModal();
    }
});
