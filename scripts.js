function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('menu-open');
}

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
  const header = document.querySelector('header');
  const menu = header.querySelector('.menu');
  const menuBtn = header.querySelector('.menu-btn');

  // If the menu is open, and the click is not on the menu or the button, close it
  if (header.classList.contains('menu-open') && !menu.contains(event.target) && !menuBtn.contains(event.target)) {
    header.classList.remove('menu-open');
  }
});



