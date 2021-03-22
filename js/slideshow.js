// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     var dots = document.getElementsByClassName("demo");
//     // var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     // captionText.innerHTML = dots[slideIndex-1].alt;
// } 

var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["slides1", "slides2", "slides3", "slides4", "slides5", "slides6", "slides7", "slides8", "slides9"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no]-1].style.display = "block"; 
    dots[slideIndex[no]-1].className += " active";
}
