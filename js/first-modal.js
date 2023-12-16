// Automatic show modal after load page
const modal = document.getElementById("modal");
const modalClose = document.getElementById('close-modal');

function showModal() {
    modal.classList.add('show-modal');
}

window.onload = function() {
    setTimeout(showModal, 3500);
}

modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));
