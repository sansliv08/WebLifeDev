// Animated Navigation for media queria (Mobile and Tablet) less then 992px 
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    //Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right'); //replace doen's work if first item is null, so it's necessary put in html class="overlay-slide-left"
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        //Animate out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate In - Nav Items
        navAnimation('in', 'out');
    }
}

// Event Listeners to Navbar
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});


// AOS
AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});

