'use strict';
const reviews = [
  {
    id: 1,
    names: 'Karolina Grabowska',
    title: 'Web developer',
    picture:
      'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ratione fugiat consequuntur unde. Nihil voluptas harum sit dolore quibusdam tempora itaque. Obcaecati molestiae officia nobis minus, necessitatibus nam dolor optio.',
  },
  {
    id: 2,
    names: 'Linda Asley',
    title: 'Buisness Analyst',
    picture:
      'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptate quod eligendi omnis, beatae corrupti quae tempore nisi dolor ex similique ratione dicta id quasi! Ad suscipit hic necessitatibus odio?',
  },
  {
    id: 3,
    names: 'Joelson Melo',
    title: 'Design Engineer',
    picture:
      'https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis expedita ipsa odit magni tenetur dolores, odio enim recusandae totam assumenda illo tempora illum, unde ipsam saepe consectetur excepturi. Sit, sapiente.',
  },
  {
    id: 4,
    names: 'Samantha Smith',
    title: 'UX Designer',
    picture: 'image1.jpg',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere cupiditate in totam iste quia, necessitatibus recusandae quos provident molestiae error enim accusantium magni quae quod alias vitae iusto. Ipsa.',
  },
  {
    id: 5,
    names: 'Ruby the Retriver',
    title: 'the guard dog',
    picture:
      'https://images.pexels.com/photos/19972137/pexels-photo-19972137/free-photo-of-moose-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam sunt dicta voluptatem unde consequatur est quae porro, doloribus debitis minima, veritatis quia illum minus iusto, cumque vero voluptas autem! ',
  },
];

//selector
const picture = document.getElementById('picture');
const names = document.querySelector('.names');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function changeValue(cardNum) {
  const item = reviews[cardNum];
  picture.src = item.picture;
  text.textContent = item.text;
  title.textContent = item.title;
  names.textContent = item.names;
}
// at the time of window load
window.addEventListener('DOMContentLoaded', function () {
  changeValue();
});

// previous button
prevBtn.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  changeValue(currentIndex);
});
// next Button
nextBtn.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  changeValue(currentIndex);
});
