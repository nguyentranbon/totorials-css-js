

let imgBox = document.querySelectorAll('.imgBox');
console.log(imgBox);

imgBox.forEach(e => e.addEventListener('click', () =>{
    e.classList.toggle('active');
}) )

function toggleMenu(){
    const menuToggle = document.querySelector('.nav-toggle__open');
    const navination = document.querySelector('.navigation__close');

    menuToggle.classList.toggle('active');
    navination.classList.toggle('active');
}


