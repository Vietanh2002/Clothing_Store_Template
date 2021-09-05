// Open Menu Product
const mainToggle = document.querySelector('.main__toggle');
const mainMenu = document.getElementById('main-large');
const mainClose = document.querySelector('.main__close');

if(mainToggle) {
   mainToggle.addEventListener('click', () =>{
      mainMenu.classList.add('open');
   })
}

if(mainClose) {
   mainClose.addEventListener('click', () =>{
      mainMenu.classList.remove('open');
   })
}
// Open list child
document.getElementById('link__child').click();
function openListChild(id) {
   let x = document.getElementById(id);
   if(x.className.indexOf('open') == -1) {
      x.classList.add('open');
   } else {
      x.classList.remove('open');
   }
}

// Open modal subscribe
const modalToggle = document.querySelector('.modal__toggle');
const modal = document.getElementById('modal-subscribe');
const modalClose = document.querySelector('.modal__close');

if(modalToggle) {
   modalToggle.addEventListener('click', () => {
      modal.classList.add('open');
   })
}

if(modalClose) {
   modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
   })
}