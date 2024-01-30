'use strict';

const container = document.getElementById('container');
const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

// on click it will get into darkmode
btn.addEventListener('click', function () {
  heading.style.color = '#fff';
  container.style.backgroundColor = '#222';
  btn.style.color = '#222';
  btn.style.backgroundColor = '#fff';
});
