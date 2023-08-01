const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
  
});
const myElement = document.querySelector('#myElement');

myElement.innerHTML = 'New content';
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  
  if (!isValid) {
    event.preventDefault(); 
});
const elementToAnimate = document.querySelector('#myElement');

elementToAnimate.style.animation = 'myAnimation 2s infinite';
const modalButton = document.querySelector('#modalButton');
const modal = document.querySelector('#myModal');

modalButton.addEventListener('click', () => {
  modal.style.display = 'block'; 
});


const closeModalButton = document.querySelector('#closeModalButton');
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});