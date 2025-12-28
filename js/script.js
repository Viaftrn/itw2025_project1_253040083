//Toggle class active
const navbarnav = document.querySelector
('.Navbar .navbar-nav');

// Ketika Hamburger Menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarnav.classList.toggle('active');
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target ) && !navbarNav.contains(e.target)) {
        navbarnav.classlist.remove('active');
    }
});