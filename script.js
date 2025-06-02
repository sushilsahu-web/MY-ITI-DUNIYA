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

function showClassmate(id) {
  const index = parseInt(id.replace("classmate", ""));
  const name = `Classmate ${index}`;
  const img = `cm${index}.jpg`;
  const text = `${name} ek energetic aur samarpit student hai.`;

  document.getElementById("classmate-detail").innerHTML = `
    <h4>${name}</h4>
    <img src="${img}" alt="${name}">
    <p>${text}</p>
  `;
}

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

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.onload = function () {
  showSlide(currentSlide); // Page load hone pe first image dikhayega
};
