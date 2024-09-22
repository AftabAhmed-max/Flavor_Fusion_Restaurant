const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
let index = 0;

function autoSlide() {
  index++;
  if (index === cards.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

let slideInterval = setInterval(autoSlide, 3000);
slideInterval;

// few problems in caraousel 
// 1. after goin to 3 it comes backwords to 1
// 2. need navigation arrows

// js for pasuing the caraousel when the mosue neters 
// slides.addEventListener('mouseenter', () => clearInterval(slideInterval));
// slides.addEventListener('mouseleave', () => {
//   slideInterval = setInterval(autoSlide, 3000);
// });
