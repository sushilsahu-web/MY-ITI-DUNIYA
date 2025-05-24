const mainBtn = document.getElementById('mainBtn');
const subButtons = document.getElementById('subButtons');

const btnTeacher = document.getElementById('btnTeacher');
const btnFriends = document.getElementById('btnFriends');

const teacherSubButtons = document.getElementById('teacherSubButtons');
const friendSubButtons = document.getElementById('friendSubButtons');

const btnManju = document.getElementById('btnManju');
const btnDinesh = document.getElementById('btnDinesh');

const contentManju = document.getElementById('contentManju');
const contentDinesh = document.getElementById('contentDinesh');

const rahulButtons = document.querySelectorAll('.btnRahul');
const rahulContent = document.querySelector('.rahulContent');

const sliderBox = document.getElementById('slider-box');

function hideAllContent() {
  contentManju.style.display = 'none';
  contentDinesh.style.display = 'none';
  rahulContent.style.display = 'none';
  sliderBox.style.display = 'block'; // Show slider if no content shown
}

mainBtn.addEventListener('click', () => {
  subButtons.style.display = subButtons.style.display === 'block' ? 'none' : 'block';
  hideAllContent();
});

btnTeacher.addEventListener('click', () => {
  teacherSubButtons.style.display = teacherSubButtons.style.display === 'flex' ? 'none' : 'flex';
  friendSubButtons.style.display = 'none';
  hideAllContent();
});

btnFriends.addEventListener('click', () => {
  friendSubButtons.style.display = friendSubButtons.style.display === 'flex' ? 'none' : 'flex';
  teacherSubButtons.style.display = 'none';
  hideAllContent();
});

btnManju.addEventListener('click', () => {
  hideAllContent();
  contentManju.style.display = 'block';
  sliderBox.style.display = 'none';
});

btnDinesh.addEventListener('click', () => {
  hideAllContent();
  contentDinesh.style.display = 'block';
  sliderBox.style.display = 'none';
});

rahulButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    hideAllContent();
    rahulContent.style.display = 'block';
    sliderBox.style.display = 'none';
  });
});

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
