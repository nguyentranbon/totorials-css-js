/*=== MENU SHOW ===*/
const showMenu= (toggleId, navID) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navID);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('nav__menu-show');
        })
    }
}

showMenu('nav-toggle','nav-menu');

/*=== REMOVE MENU MOBILE ===*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    // Active link
    navLink.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('nav__menu-show');
}
navLink.forEach(e => e.addEventListener('click', linkAction));
