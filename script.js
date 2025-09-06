// -------- YEAR IN FOOTER --------
document.getElementById("year").textContent = new Date().getFullYear();

// -------- HAMBURGER MENU --------
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

// -------- THUMBNAIL CLICK --------
const thumbs = document.querySelectorAll(".thumb");
const largeImage = document.getElementById("largeImage");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // change main image
    const fullImg = thumb.getAttribute("data-full");
    largeImage.src = fullImg;

    // update active thumbnail
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// -------- SLIDESHOW --------
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let playing = true;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

document.getElementById("playPause").addEventListener("click", function () {
  if (playing) {
    clearInterval(slideInterval);
    this.textContent = "Play";
  } else {
    slideInterval = setInterval(nextSlide, 2000);
    this.textContent = "Pause";
  }
  playing = !playing;
});

// -------- MODAL (Apply Now Form) --------
document.addEventListener("DOMContentLoaded", function () {
  const applyBtn = document.querySelector(".btn.primary"); // Apply Now button
  const modal = document.getElementById("applyModal");
  const closeModal = document.getElementById("closeModal");

  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
