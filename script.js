const modeToggleCheckbox = document.getElementById('mode-toggle-checkbox');
const navbar = document.querySelector('nav');
const navbarLinks = document.querySelectorAll('.nav-links li a');

modeToggleCheckbox.addEventListener('change', toggleDarkLightMode);

function toggleDarkLightMode() {
  if (modeToggleCheckbox.checked) {
    document.body.classList.add('dark-mode');
    navbar.style.backgroundColor = '#333';
    navbarLinks.forEach(link => {
      link.style.color = '#fff';
    });
  } else {
    document.body.classList.remove('dark-mode');
    navbar.style.backgroundColor = '#f2f2f2';
    navbarLinks.forEach(link => {
      link.style.color = '#333';
    });
  }
}
