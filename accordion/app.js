// const accordion = document.getElementsByClassName('container');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }
let accordion = document.querySelectorAll('.container');
accordion = Array.from(accordion);
console.log(accordion);
accordion.forEach((items) => {
  items.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});
