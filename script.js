'use strict'

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
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

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// Sticky navigation
const contain = document.querySelector('.contain')
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

// Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

// Lazy loading images
// const imgTargets = document.querySelectorAll('img[data-src]')

// const loadImg = function (entries, observer) {
//   const [entry] = entries

//   if (!entry.isIntersecting) return

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img')
//   })

//   observer.unobserve(entry.target)
// }

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px'
// })

// imgTargets.forEach(img => imgObserver.observe(img))

// Scrolling feature

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect()

  // Scrolling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  })
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0
  const maxSlide = slides.length

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    )
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0)
    createDots()

    activateDot(0)
  }
  init()

  // Event handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide()
    e.key === 'ArrowRight' && nextSlide()
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}
slider()

// Modal Window Code
const modalSizwe = document.querySelector('.show_sizwe');
const modalNdumiso = document.querySelector('.show_ndumiso');
const modalGreatman = document.querySelector('.show_greatman');
const overlay = document.querySelector('.overlay');
const btnCloseModalSizwe = document.querySelector('.close_sizwe');
const btnCloseModalNdumiso = document.querySelector('.close_ndumiso');
const btnCloseModalGreatman = document.querySelector('.close_greatman');
const btnsOpenModal = document.querySelectorAll('.btn--view-sizwe');
const btnsOpenModal2 = document.querySelectorAll('.btn--view-nondumiso');
const btnsOpenModal3 = document.querySelectorAll('.btn--view-greatman');

// For Sizwe
const openModal1 = function () {
  modalSizwe.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal1 = function () {
  modalSizwe.classList.add('hidden');
  overlay.classList.add('hidden');
};

// For Ndumiso
const openModal2 = function () {
  modalNdumiso.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal2 = function () {
  modalNdumiso.classList.add('hidden');
  overlay.classList.add('hidden');
};

// For Greatman
const openModal3 = function () {
  modalGreatman.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal3 = function () {
  modalGreatman.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Showing and closing first modal.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal1);

btnCloseModalSizwe.addEventListener('click', closeModal1);
overlay.addEventListener('click', closeModal1);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modalSizwe.classList.contains('hidden')) {
    closeModal1();
  }
});

// Showing and closing second modal.
for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener('click', openModal2);

btnCloseModalNdumiso.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modalNdumiso.classList.contains('hidden')) {
    closeModal2();
  }
});

// Showing and closing second modal.
for (let i = 0; i < btnsOpenModal3.length; i++)
  btnsOpenModal3[i].addEventListener('click', openModal3);

btnCloseModalGreatman.addEventListener('click', closeModal3);
overlay.addEventListener('click', closeModal3);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});