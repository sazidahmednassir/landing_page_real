const togglebutton = document.getElementsByClassName('navbar-toogle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
togglebutton.addEventListener('click', function () {
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
});