'use strict'

const btnToView = document.querySelector('.btn--view-careers')
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

// This function is for the careers page. It hides the button and displays div.
btnToView.addEventListener('click', (e) => {
   btnToView.style.visibility = 'hidden'

   const delayInMilliseconds = 400

  setTimeout(function () {
    document.getElementById('left12').style.display = 'block'
  }, delayInMilliseconds)
})