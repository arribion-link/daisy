const navBars = document.getElementById('navBars');
const nav = document.getElementById('nav');
let isValid = true;

const show = nav.addEventListener('click', () => {
    showNav()
    isValid;
});


function showNav() {
    nav.style.display = 'none';
}