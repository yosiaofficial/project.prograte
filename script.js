
let h1 = document.querySelector('header h1');

window.addEventListener('load', (e)=>{
	h1.style.color = 'white';
	h1.style.transform = 'translateX(0%)';
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');


menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide');
});




