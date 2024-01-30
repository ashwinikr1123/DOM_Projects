'use strict';

let count = 0;
const btn = document.querySelectorAll('.btn');
const btns = document.querySelector('.btns');
const displayNum = document.querySelector('.displayNum');

btn.forEach((items) => {
  items.addEventListener('click', function (e) {
    // console.log(e.currentTarget);
    const task = e.currentTarget.classList;
    console.log(task);
    if (task.contains('decrease')) {
      count--;
    } else if (task.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    displayNum.textContent = count;
  });
});
