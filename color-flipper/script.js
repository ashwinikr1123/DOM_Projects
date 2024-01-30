'use strict';
// const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//   const random = generateRandom();
//   console.log(random);

//   document.body.style.backgroundColor = colors[random];
//   color.textContent = colors[random];
// });

// dynamically adding color
btn.addEventListener('click', function () {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += hexColors[generateRandom()];
  }
  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});

// for generateing random number

function generateRandom() {
  return Math.floor(Math.random() * hexColors.length);
}
