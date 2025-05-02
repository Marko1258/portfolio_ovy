const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = document.querySelector('.close-lightbox');

document.querySelectorAll('.work-item img').forEach(image => {
    image.addEventListener('click', e => {
        lightboxImg.src = e.target.src;
        lightbox.classList.add('active');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});