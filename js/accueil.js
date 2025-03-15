const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-menu-active');
  hamburgerBtn.querySelector('i').classList.toggle('fa-times');
  hamburgerBtn.querySelector('i').classList.toggle('fa-bars');
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger-btn')) {
    navMenu.classList.remove('mobile-menu-active');
    hamburgerBtn.querySelector('i').classList.add('fa-bars');
    hamburgerBtn.querySelector('i').classList.remove('fa-times');
  }
});