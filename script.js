// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('header nav ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const topOffset = document.querySelector('header').offsetHeight;
    const scrollToPosition = target.offsetTop - topOffset;

    window.scroll({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  });
});

// Show scroll to top button when scrolling down
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 500) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
This code does the following things:

Toggles the mobile menu when the menu button is clicked.
Adds smooth scrolling to anchor links.
Shows the "scroll to top" button when the user has scrolled down the page.
Scrolls to the top of the page when the "scroll to top" button is clicked.

