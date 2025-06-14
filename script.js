function toggleContent(id) {
  const boxes = document.querySelectorAll(".content-box");
  boxes.forEach(box => {
    box.style.display = (box.id === id) ? "block" : "none";
  });
}

function showSubContent(name) {
  const detail = {
    umesh: { text: "Umesh bahut funny hai, doston ka saath nahi chhodta.", img: "umesh.jpg" },
    gandhi: { text: "Gandhi shaant aur samajhdaar hai, har kisi ka favourite.", img: "gandhi.jpg" },
    rahul: { text: "Rahul sporty hai aur cricket ka star player hai.", img: "rahul.jpg" },
    subhash: { text: "Subhash mehnati aur honest ladka hai.", img: "subhash.jpg" },
    vivek: { text: "Vivek hamesha madad karta hai aur coding mein expert hai.", img: "vivek.jpg" }
  };

  const data = detail[name];
  document.getElementById("friend-detail").innerHTML = `
    <h4>${name.toUpperCase()}</h4>
    <img src="${data.img}" alt="${name}">
    <p>${data.text}</p>
  `;
}

const classmates = [
  "Shyaam Rathia", "Jitesh Rathia", "Omprakash Pradhan", "Deepak Yadav", "Narsing Yadav",
  "Avinash Ajgalle", "Akhil Tirkey", "Abhishek Tigga", "Adan Ekka", "Benjamin Toppo",
  "Anuraj Tirkey", "Anurag Toppo", "Sandip Lakra", "Lokesh Kumar Mahant", "Yogesh Sarthi",
  "Rohan Sidar", "Roopa Rathia", "Ansuiya Rathia", "Neha Sarthi", "Kanchan Mahanand",
  "Shraddha Miree", "Siddhi Rani Dansena", "Monika Gupta", "Annpurna Mahant", "Anastasia"
];

// Generate classmate buttons dynamically
const classmateList = document.getElementById("classmateList");

classmates.forEach((name, index) => {
  classmateList.innerHTML += `
    <div class="classmate-item">
      <button class="classmate-button" onclick="toggleInfo(this)">${name}</button>
      <div class="classmate-info">
        <img src="cm${index + 1}.jpg" alt="${name}">
        <p>${name}</p>
      </div>
    </div>
  `;
});

// Toggle classmate info
function toggleInfo(button) {
  const allInfos = document.querySelectorAll('.classmate-info');
  const allButtons = document.querySelectorAll('.classmate-button:not(#mainClassmateBtn)');

  allInfos.forEach(info => info.style.display = 'none');
  allButtons.forEach(btn => btn.classList.remove('active'));

  const infoDiv = button.nextElementSibling;
  infoDiv.style.display = 'block';
  button.classList.add('active');
}

// Toggle main classmate list visibility
document.getElementById("mainClassmateBtn").addEventListener("click", () => {
  const list = document.getElementById("classmateList");
  const btn = document.getElementById("mainClassmateBtn");

  if (list.style.display === "none") {
    list.style.display = "block";
    btn.textContent = "Hide Classmates";
  } else {
    list.style.display = "none";
    btn.textContent = "Show Classmates";
  }
});

const sliderImages = [
  "kaj1.jpg", "kaj2.webp", "kaj3.jpg", "kaj4.jpg", "kaj5.jpg",
  "kaj6.jpg", "kaj7.jpg", "kaj8.webp", "kaj9.webp", "kaj10.webp",
  "kaj11.webp", "kaj12.webp", "kaj13.jpg", "kaj14.webp", "kaj15.jpg"
];

let currentSlide = 0;

function showSlide(index) {
  const img = document.getElementById("slider-image");
  currentSlide = (index + sliderImages.length) % sliderImages.length;
  img.src = sliderImages[currentSlide];
}

function showSlide(index) {
  const img = document.getElementById("slider-images");
  currentSlide = (index + sliderImages.length) % sliderImages.length;
  img.src = sliderImages[currentSlide];
}
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.onload = function () {
  showSlide(currentSlide); // Page load hone pe first image dikhayega
};
