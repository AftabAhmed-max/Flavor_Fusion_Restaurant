const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const offerImages = document.querySelectorAll('.offer-img');
const dots = document.querySelectorAll('.dot');
let index = 0;

// Working of Auto Sliding feature

function updateSlide() {
  let offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
  updateDots(); 
}

function autoSliding() {
  index++;
  if (index === cards.length) {
    index = 0; 
  }
  updateSlide(); 
}

let slideInterval = setInterval(autoSliding, 3000);

// Working of Dot Navigation

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

updateDots();

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    clearInterval(slideInterval); 
    index = parseInt(e.target.getAttribute('data-index')); 
    updateSlide(); 
    slideInterval = setInterval(autoSliding, 3000); 
  });
});

// Working of Pause Feature

offerImages.forEach(image => {
  image.addEventListener('mouseenter', () => clearInterval(slideInterval));
  image.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSliding, 3000);
  });
});


// JS for Mobile Device
const menubutton = document.querySelector('.fa-bars');
const menusection = document.querySelector('section.menu-section');

menubutton.addEventListener('click', () => {
  if (menusection.style.display === 'block') {
    menusection.style.display = 'none';
  } else {
    menusection.style.display = 'block'; 
  }
});

