
   const closeButton = document.getElementById('closeModal') as HTMLElement;
   const videoButton = document.getElementById('videoButton') as HTMLElement;
   const videoModal = document.getElementById('videoModal') as HTMLElement;
   const video = document.getElementById('video') as HTMLIFrameElement;
    const videoSrc = 'https://www.youtube.com/embed/x6iyz1AQhuU?autoplay=1'

    function closeModal() {
        videoModal.hidden = true;
        video.src = '';
        document.body.style.overflowY = 'auto';
        videoButton.focus();
    }
    closeButton.addEventListener('click', () => {
    closeModal();

});

videoButton.addEventListener('click', () => {
    videoModal.hidden = false;
    document.body.style.overflowY = 'hidden';
    video.src = videoSrc;
    closeButton.focus();
});



document.addEventListener('keydown', (event)=> {
    if(event.key === 'Escape') {
        closeModal();
    }
})
