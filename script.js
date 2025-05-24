

// SLIDER FUNCTIONALITY
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 500}px)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlider();
});
next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});
