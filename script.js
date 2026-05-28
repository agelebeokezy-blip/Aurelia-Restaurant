// page scroll

const hiddenElements = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

hiddenElements.forEach((el, index) => {

  el.style.transitionDelay = `${index * 0.1}s`;

  observer.observe(el);

});

// navbar scroll

const header = document.querySelector('.navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling DOWN
    header.classList.add('show');
  } else if (currentScrollY === 0) {
    // Scrolling UP
    header.classList.remove('show');
  }

  lastScrollY = currentScrollY;
});

// refresh from top

// Disables the browser's automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensures the window scrolls to top on the load event
window.scrollTo(0, 0);
