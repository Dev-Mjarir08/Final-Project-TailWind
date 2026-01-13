const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const blogBtn = document.getElementById('blogBtn');
const blogMenu = document.getElementById('blogMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('block')
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});

blogBtn.addEventListener('click', () => {
  blogMenu.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.add('translate-x-full');
  }
});

// Slider Functionality
const images = [
  './src/images/Slider_1.png',
  './src/images/Slider_2.jpg',
  './src/images/Slider_3.png',
  './src/images/Slider_4.jpg'
];

let currentSlide = 0;
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');

function updateSlide(index) {
  mainImage.src = images[index];
  mainImage.classList.add('opacity-0');
  setTimeout(() => {
    mainImage.classList.remove('opacity-0');
  }, 50);

  // Update thumbnails
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('opacity-100', 'border-blue-500');
      thumb.classList.remove('opacity-50');
    } else {
      thumb.classList.remove('opacity-100', 'border-blue-500');
      thumb.classList.add('opacity-50');
    }
  });

  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlide(currentSlide);
}

// Thumbnail click events
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateSlide(index);
  });
});


const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');

function toggleTheme() {
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-gray-900');
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('text-black');
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}

let index = 0;
const slider = document.getElementById("slider");
const total = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlider();
}