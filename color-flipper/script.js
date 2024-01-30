'use strict';
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const random = generateRandom();
  console.log(random);
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

// for generating random number

function generateRandom() {
  return Math.floor(Math.random() * colors.length);
}
