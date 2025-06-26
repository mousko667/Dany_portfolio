const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});