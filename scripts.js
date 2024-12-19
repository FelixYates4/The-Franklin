function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('menu-open');
}

document.addEventListener('click', function(event) {
  const header = document.querySelector('header');
  const menu = header.querySelector('.menu');
  const menuBtn = header.querySelector('.menu-btn');

  if (header.classList.contains('menu-open') && !menu.contains(event.target) && !menuBtn.contains(event.target)) {
    header.classList.remove('menu-open');
  }
});



