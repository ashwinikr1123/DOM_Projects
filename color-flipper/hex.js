'use strict';
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

// dynamically adding color
btn.addEventListener('click', function () {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += hexColors[generateRandom()];
  }
  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});

// for generating random number

function generateRandom() {
  return Math.floor(Math.random() * hexColors.length);
}
