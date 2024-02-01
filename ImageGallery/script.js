'use strict ';

// create False API;

const gallery = [
  {
    id: 1,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 5,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 7,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 8,
    picture:
      'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
  },
];
const frame = document.querySelector('.frame');
const gridGallery = document.querySelector('.grid-gallery');

// on load

window.addEventListener('DOMContentLoaded', function () {
  displayGallery(gallery);
});

function displayGallery(galleryImageNum) {
  let displayImage = galleryImageNum.map((items) => {
    return ` <div class="frame">
    <img
      src=${items.picture}
      alt="img"
      class="image"
    />
    <h3 class="sub-heading">${items.desc}</h3>
  </div>`;
  });
  displayImage = displayImage.join('');
  //   console.log(displayImage);
  gridGallery.innerHTML = displayImage;
  //   frame.innerHTML = displayImage;
}
