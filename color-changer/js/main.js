import { pickContainer, inputBox, resultBox, pickBtn } from './variable.js';

function addH1() {
   const newH1 = document.createElement('h1');
   const newBtn = document.createElement('button');
   newH1.textContent = 'Color Changer';
   //css
   newH1.style.color = 'white';
   pickBtn.style.padding = '10px';
   pickBtn.style.borderRadius = '10px';
   //add
   pickContainer.insertBefore(newH1, pickContainer.firstChild);
}
addH1();
//event change color

function changeColor() {
   const input = inputBox.value;
   resultBox.style.backgroundColor = input;
}
inputBox.addEventListener('keyup', changeColor);

//random color

function randomColor() {
   const letter = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
   }
   return color;
}
pickBtn.addEventListener('click', () => {
   const randomColor1 = randomColor();
   pickContainer.style.backgroundColor = randomColor1;
   pickContainer.style.color = randomColor1;
   console.log(randomColor1);
});
