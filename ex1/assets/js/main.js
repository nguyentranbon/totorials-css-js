
/*=== SHOW MENU ===*/
const showMenu = (toggleId, navId, button, modal) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    closeButton = document.querySelector(button);
    attributeModal = document.querySelector(modal);
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('nav__menu-show');
            if(nav.classList.contains('nav__menu-show')){
                attributeModal.style.display = 'block';
            }else{
                attributeModal.style.display = 'none';
            }
        });
        closeButton.addEventListener('click', ()=>{
            nav.classList.toggle('nav__menu-show');
            attributeModal.style.display = 'none'
        });
        window.onclick = function(e){
            if(e.target == attributeModal){
                nav.classList.toggle('nav__menu-show');
                attributeModal.style.display = "none"
            }
        }
    }
}
showMenu('nav-toggle','nav-menu','.modal__close-btn','.modal');



// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");