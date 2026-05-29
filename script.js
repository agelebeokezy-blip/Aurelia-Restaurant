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


// menu page lunch and dinner toggle

const lunch = document.querySelector(".lunch-menu")
const dinner = document.querySelector(".dinner-menu")
const lunchbutton = document.querySelector(".span2")
const dinnerbutton = document.querySelector(".span1")
const lunchh1 = document.querySelectorAll(".lunch-h1")
const dinnerh1 = document.querySelectorAll(".dinner-h1")

// lunch button click function

lunchbutton.addEventListener("click", () =>{
  lunch.style.display="block"
  dinner.style.display="none"
  lunchbutton.style.background="#E8C8A0"
  lunchbutton.style.color="black"
  dinnerbutton.style.background="none"
  dinnerbutton.style.color="#E8C8A0"
  lunchh1.forEach((lunch1) => {
    lunch1.style.display="block"
  })
  
   dinnerh1.forEach((dinnerh1) => {
    dinnerh1.style.display="none"
  })

  // lunch and dinner hover effects when lunch is clicked

  dinnerbutton.addEventListener('mouseenter', () => {
    dinnerbutton.style.background=" #44413b"
    dinnerbutton.style.color="#E8C8A0"
  })
  dinnerbutton.addEventListener('mouseleave', () => {
    dinnerbutton.style.background=" none"
    dinnerbutton.style.color="#E8C8A0"
  })

   lunchbutton.addEventListener('mouseenter', () => {
    lunchbutton.style.background="#E8C8A0"
    lunchbutton.style.color="black"
  })
  lunchbutton.addEventListener('mouseleave', () => {
    lunchbutton.style.background="#E8C8A0"
    lunchbutton.style.color="black"
  })
})

// dinner button click function

dinnerbutton.addEventListener("click", () =>{
  lunch.style.display="none"
  dinner.style.display="block"
  lunchbutton.style.background="none"
  lunchbutton.style.color="#E8C8A0"
  dinnerbutton.style.background="#E8C8A0"
  dinnerbutton.style.color="black"
   lunchh1.forEach((lunch11) => {
    lunch11.style.display="none"
  })
  
   dinnerh1.forEach((dinnerh11) => {
    dinnerh11.style.display="block"
  })

  // lunch and dinner hover effects when dinner is clicked

   lunchbutton.addEventListener('mouseenter', () => {
    lunchbutton.style.background=" #44413b"
    lunchbutton.style.color="#E8C8A0"
  })
  lunchbutton.addEventListener('mouseleave', () => {
    lunchbutton.style.background=" none"
    lunchbutton.style.color="#E8C8A0"
  })

   dinnerbutton.addEventListener('mouseenter', () => {
    dinnerbutton.style.background=" #E8C8A0"
    dinnerbutton.style.color="black"
  })
  dinnerbutton.addEventListener('mouseleave', () => {
    dinnerbutton.style.background="#E8C8A0"
    dinnerbutton.style.color="black"
  })
})
