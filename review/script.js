'use strict';
const reviews = [
  {
    id: 1,
    names: 'Karolina Grabowska',
    title: 'Web developer',
    picture:
      'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Solutanatus minima perspiciatis nam at quasi asperiores qui fuga ipsafacilis iusto, optio veritatis nihil quos vitae cupiditate modi corrupti repudiandae veniam dolorem',
  },
  {
    id: 2,
    names: 'Linda Asley',
    title: 'Buisness Analyst',
    picture:
      'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Solutanatus minima perspiciatis nam at quasi asperiores qui fuga ipsafacilis iusto, optio veritatis nihil quos vitae cupiditate modi corrupti repudiandae veniam dolorem',
  },
  {
    id: 3,
    names: 'Joelson Melo',
    title: 'Design Engineer',
    picture:
      'https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Solutanatus minima perspiciatis nam at quasi asperiores qui fuga ipsafacilis iusto, optio veritatis nihil quos vitae cupiditate modi corrupti repudiandae veniam dolorem',
  },
  {
    id: 4,
    names: 'Ruby the Retriver',
    title: 'the guard dog',
    picture:
      'https://images.pexels.com/photos/19972137/pexels-photo-19972137/free-photo-of-moose-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Solutanatus minima perspiciatis nam at quasi asperiores qui fuga ipsafacilis iusto, optio veritatis nihil quos vitae cupiditate modi corrupti repudiandae veniam dolorem ',
  },
];

// selectors
const picture = document.querySelector('#picture');
const names = document.querySelector('.names');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const surpriseBtn = document.querySelector('.surprise-btn');

let currentIndex = 0;
// for changing values in the card
function changeValue(cardNum) {
  let item = reviews[cardNum];
  picture.src = item.picture;
  names.textContent = item.names;
  text.textContent = item.text;
  title.textContent = item.title;
}

// at the time of loading
window.addEventListener('DOMContentLoaded', function () {
  changeValue(currentIndex);
});
//next button
nextBtn.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  changeValue(currentIndex);
});

//previous button
prevBtn.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  changeValue(currentIndex);
});
