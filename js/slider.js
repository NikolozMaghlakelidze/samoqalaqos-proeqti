const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function showThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add('active-thumbnail');
    } else {
      thumbnail.classList.remove('active-thumbnail');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  showThumbnail(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  showThumbnail(currentSlide);
}

showSlide(currentSlide);
showThumbnail(currentSlide);

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    showSlide(i);
    showThumbnail(i);
  });
});

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);