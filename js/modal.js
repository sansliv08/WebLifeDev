// Several modals in same page html
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal-container");
const closeButtons = document.getElementsByClassName("btn-close");

for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
        modals[index].classList.toggle("show-modal");
    };
    trigger.addEventListener("click", toggleModal);
    closeButtons[index].addEventListener("click", toggleModal);
    window.addEventListener('click', (e) => (e.target === modals[index] ? modals[index].classList.toggle('show-modal') : false));
}
