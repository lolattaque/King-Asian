let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].style.display = 'none';
    current = (current + 1) % slides.length;
    slides[current].style.display = 'block';
}

// Initialize first slide
slides.forEach((slide, index) => {
    if(index !== 0) slide.style.display = 'none';
});

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
