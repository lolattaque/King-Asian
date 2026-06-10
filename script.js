// ============ Mobile Hamburger Menu ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ============ Sticky Navbar Shadow ============
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);

  // Back to top button visibility
  backToTop.classList.toggle('visible', window.scrollY > 400);
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// ============ Fade-in on Scroll ============
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// ============ Back to Top Button ============
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ Footer Year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Menu Item Modal ============
const menuModal = document.getElementById('menu-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

function openMenuModal(item) {
  modalImg.src = item.dataset.img;
  modalImg.alt = item.dataset.name;
  modalTitle.textContent = item.dataset.name;
  modalPrice.textContent = item.dataset.price;
  modalDesc.textContent = item.dataset.desc;
  menuModal.classList.add('active');
  menuModal.setAttribute('aria-hidden', 'false');
}

function closeMenuModal() {
  menuModal.classList.remove('active');
  menuModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => openMenuModal(item));
});

modalClose.addEventListener('click', closeMenuModal);

menuModal.addEventListener('click', (e) => {
  if (e.target === menuModal) closeMenuModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuModal.classList.contains('active')) closeMenuModal();
});
