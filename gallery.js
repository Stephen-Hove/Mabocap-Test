'use strict'

const nav = document.querySelector('.nav')

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

// Sticky Navbar
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// Sticky navigation
const contain = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})

headerObserver.observe(contain)

// Modal Window Code
const modalProjects = document.querySelector('.show_projects');
const modalEvents = document.querySelector('.show_events');
const overlay = document.querySelector('.overlay');
const btnCloseModalProjects = document.querySelector('.close_projects');
const btnCloseModalEvents = document.querySelector('.close_events');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');

// For Projects
const openModalProjects = function () {
  modalProjects.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalProjects = function () {
  modalProjects.classList.add('hidden');
  overlay.classList.add('hidden');
};

// For Events
const openModalEvents = function () {
  modalEvents.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalEvents = function () {
  modalEvents.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Showing and closing first modal.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModalProjects);

btnCloseModalProjects.addEventListener('click', closeModalProjects);
overlay.addEventListener('click', closeModalProjects);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !openModalProjects.classList.contains('hidden')) {
    closeModalProjects();
  }
});

// Showing and closing first modal.
for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener('click', openModalEvents);

btnCloseModalEvents.addEventListener('click', closeModalEvents);
overlay.addEventListener('click', closeModalEvents);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !openModalEvents.classList.contains('hidden')) {
    closeModalEvents();
  }
});