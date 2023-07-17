const modeToggleCheckbox = document.getElementById('mode-toggle-checkbox');
const navbar = document.querySelector('nav');
const navbarLinks = document.querySelectorAll('.nav-links li a');
const heading1 = document.getElementById('heading-1');
const heading2 = document.getElementById('heading-2');

// Check the initial state of the mode toggle checkbox
toggleDarkLightMode();

// Add event listener to handle mode toggle
modeToggleCheckbox.addEventListener('change', toggleDarkLightMode);

// function that handles the logic for toggling between light mode and dark mode.
function toggleDarkLightMode() {
    // If the mode toggle checkbox is checked
    if (modeToggleCheckbox.checked) {
        document.body.classList.add('dark-mode');
        navbar.style.backgroundColor = '#333';
        navbarLinks.forEach(link => {
        link.style.color = '#fff';
    });
    heading1.textContent = "Welcome to Kalen's Website";
    heading2.textContent = "Kalen's Dark side";
    heading1.style.color = '#e87400';
    heading2.style.color = '#e87400';
  } else {
        document.body.classList.remove('dark-mode');
        navbar.style.backgroundColor = '#f2f2f2';
        navbarLinks.forEach(link => {
        link.style.color = '#333';
    });
    heading1.textContent = "Welcome to Kalen's Website";
    heading2.textContent = "Kalen's Light side";
    heading1.style.color = '#7cc6fb'; 
    heading2.style.color = '#7cc6fb'; 
  }
}