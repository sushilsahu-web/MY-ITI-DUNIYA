const mainBtn = document.getElementById('mainBtn');
const subButtons = document.getElementById('subButtons');
const sliderContainer = document.getElementById('sliderContainer');

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

// Hide all content
function hideAllContent() {
  contentManju.style.display = 'none';
  contentDinesh.style.display = 'none';
  rahulContent.style.display = 'none';
}

// Toggle main button
mainBtn.addEventListener('click', () => {
  const isVisible = subButtons.style.display === 'block';
  subButtons.style.display = isVisible ? 'none' : 'block';
  sliderContainer.classList.toggle('hidden', !isVisible);
  teacherSubButtons.style.display = 'none';
  friendSubButtons.style.display = 'none';
  hideAllContent();
});

// My Teacher button
btnTeacher.addEventListener('click', () => {
  const isVisible = teacherSubButtons.style.display === 'flex';
  teacherSubButtons.style.display = isVisible ? 'none' : 'flex';
  friendSubButtons.style.display = 'none';
  hideAllContent();
});

// My Friends button
btnFriends.addEventListener('click', () => {
  const isVisible = friendSubButtons.style.display === 'flex';
  friendSubButtons.style.display = isVisible ? 'none' : 'flex';
  teacherSubButtons.style.display = 'none';
  hideAllContent();
});

// Manju content
btnManju.addEventListener('click', () => {
  const isVisible = contentManju.style.display === 'block';
  hideAllContent();
  if (!isVisible) contentManju.style.display = 'block';
});

// Dinesh content
btnDinesh.addEventListener('click', () => {
  const isVisible = contentDinesh.style.display === 'block';
  hideAllContent();
  if (!isVisible) contentDinesh.style.display = 'block';
});

// Rahul buttons
rahulButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isVisible = rahulContent.style.display === 'block';
    hideAllContent();
    if (!isVisible) rahulContent.style.display = 'block';
  });
});

// Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderInner = document.getElementById('sliderInner');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;
  sliderInner.style.transform = translateX(-${currentSlide * 100}%);
}

document.getElementById('next').addEventListener('click', () => showSlide(currentSlide + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(currentSlide - 1));

showSlide(currentSlide);
