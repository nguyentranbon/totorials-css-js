/* === SHOW MENU === */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('nav__menu-show')
        });
    }
}
showMenu('nav-toggle','nav-menu');
/* === REMOVE MENU MOBILE === */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('nav__menu-show');
}
navLink.forEach(e => e.addEventListener('click', linkAction));

/* === CHANGE BACKGROUND HEADER === */
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200){
        nav.classList.add('l-header__scroll');
    }else{
        nav.classList.remove('l-header__scroll');
    }
}
window.addEventListener('scroll', scrollHeader);

/* == SHOW SCROLL TOP === */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560){
        scrollTop.classList.add('scroll__top-show');
    }else{
        scrollTop.classList.remove('scroll__top-show');
    }
}
window.addEventListener('scroll', scrollTop);

/* === SCROLL SECTIONS ACTIVE LINK === */
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset;
    
    sections.forEach(e =>{
        const sectionHeight = e.offsetHeight;
        const sectionTop = e.offsetTop - 52;
        sectionId = e.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__link-active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__link-active')
        }
    })
};
window.addEventListener('scroll', scrollActive);

/* === DARK LIGHT THEME === */
const themeButton = document.getElementById('theme-button');
const darkTheme ='dark-theme';
const iconTheme = 'fa-sun';
/* Previously select topic (if user selected) */
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}
/* Active/ deactivate the theme manually with the button */
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});
