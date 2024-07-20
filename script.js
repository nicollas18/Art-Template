const imgs = document.querySelectorAll('.img');

imgs.forEach((img) => {
    img.addEventListener('click', () => {
        removeActive();
        img.classList.add('active');
    })
})

function removeActive() {
    imgs.forEach(panel => {
        panel.classList.remove('active');
    })
}