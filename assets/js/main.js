const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
const skillsContainer = document.querySelector('.skills__container');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

navMenu.addEventListener('click', ({ target }) => {
  if (target.classList.contains('nav__link')) {
    navMenu.classList.remove('show-menu');
  }
});

skillsContainer.addEventListener('click', ({ target }) => {
  if (target.closest('.skills__header')) {
    skillsContent.forEach((item) => {
      if (
        target.closest('div[data-skills]').dataset.skills ===
          item.dataset.skills &&
        !item.classList.contains('skills__open')
      ) {
        item.classList.add('skills__open');
      } else {
        item.classList.remove('skills__open');
      }
    });
  }
});

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
