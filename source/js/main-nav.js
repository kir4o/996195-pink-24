const mainNav = document.querySelector('.main-nav')
const mainNavWrapper = document.querySelector('.page-header__wrapper')
const mainNavToggle = document.querySelector('.main-nav__toggle')

mainNavToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed')
    mainNav.classList.add('main-nav--opened')
    mainNavWrapper.classList.add('page-header__wrapper--opened')
  } else {
    mainNav.classList.add('main-nav--closed')
    mainNav.classList.remove('main-nav--opened')
    mainNavWrapper.classList.remove('page-header__wrapper--opened')
  }
})
