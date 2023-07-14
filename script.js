const modeToggleCheckbox = document.getElementById('mode-toggle-checkbox');
const body = document.body;

modeToggleCheckbox.addEventListener('change', toggleDarkLightMode);

function toggleDarkLightMode() {
  if (modeToggleCheckbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}