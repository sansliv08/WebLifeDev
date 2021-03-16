// Loader
const loader = document.querySelector('.loader');
const contents = document.querySelector('.works-container');
const buttons = document.getElementById('myBtnContainer');

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
            contents.style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(() => {
            document.getElementById('interactive');
            loader.style.visibility="hidden";
            contents.style.visibility="visible";
            buttons.classList.remove('hidden');
        },1000);
    }
}