const videoBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');

videoBtn.addEventListener('click', () => {
    if (!videoBtn.classList.contains('slide')) {
        videoBtn.classList.add('slide');
        videoContainer.pause();
    } else {
        videoBtn.classList.remove('slide')
        videoContainer.play();
    }
    //alert('dio click')
})

const prelouder = document.querySelector('.prelouder');
window.addEventListener('load', () => {
    return prelouder.classList.add('hide-prelouder');
})