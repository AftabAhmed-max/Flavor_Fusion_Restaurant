const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const offerImages = document.querySelectorAll('.offer-img');
let index = 0;

// Working of Auto Sliding feature

function updateSlide() {
  let offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function autoSliding() {
  index++;
  if (index === cards.length) {
    index = 0; 
  } else {
    updateSlide();
  }
}

let slideInterval = setInterval(autoSliding, 3000);

// Working of Pause Feature

offerImages.forEach(image => {
  image.addEventListener('mouseenter', () => clearInterval(slideInterval));
  image.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSliding, 3000);
  });
});

// Working of Navigation Buttons

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = cards.length - 1;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  index++;
  if (index === cards.length) {
    index = 0;
  }
  updateSlide();
});
