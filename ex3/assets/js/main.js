const showMenu = (toggleId, navbarId, bodyId) =>{
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);
    const bodyPadding = document.getElementById(bodyId)
    if(toggle && navbar){
        
        toggle.addEventListener('click', ()=>{
            /* APPEAR MENU */
            navbar.classList.toggle('l-navbar__show');
            /* ROTATE TOGGLE */
            toggle.classList.toggle('nav__toggle-show');
            /* PADDING BODY */
            bodyPadding.classList.toggle('expander')
        });
        

    }
}
showMenu('nav-toggle','navbar','body');

/* LINK ACTIVE COLOR */

const linkColor = document.querySelectorAll('.nav__link');
function colorLink(){
    linkColor.forEach(event => event.classList.remove('nav__link-active'));
    this.classList.add('nav__link-active');
}

linkColor.forEach(event => event.addEventListener('click', colorLink));