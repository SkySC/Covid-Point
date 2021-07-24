// Toggle navbar icon on click
const hamburgerButton = document.querySelector('.hamburger-nav-button')
const hamburgerIconLines = document.querySelectorAll(
	'.hamburger-open-icon-line',
)
const logo = document.querySelector('.logo')
const navbar = document.querySelector('.main-nav')
const arrowDown = document.querySelector('.nav-arrow-down')
const targetElement = document.querySelector('.scroll-target')

let menuIsOpen = false

hamburgerButton.addEventListener('click', () => {
	menuIsOpen = !menuIsOpen

	// Disable scrolling, when the menu is open
	if (menuIsOpen) {
		const currentOffsetY = window.scrollY
		document.body.style.position = 'fixed'
		document.body.style.top = `-${currentOffsetY}px`
		// Auto scroll to previous position
	} else {
		const currentBodyOffsetY = document.body.style.top
		document.body.style.position = ''
		document.body.style.top = ''
		window.scrollTo(0, -1 * parseInt(currentBodyOffsetY || '0'))
	}

	hamburgerIconLines.forEach((hamburgerLine) => {
		hamburgerLine.classList.toggle('hamburger-closed-icon')
	})

	const hiddenMenu = document.querySelector('.hide-menu-content')
	hiddenMenu.classList.toggle('show-menu-content')

	logo.classList.toggle('hide-logo')
})

// Hide navbbar on scroll down & show on scroll up
let lastScrollYPos = 0

window.addEventListener('scroll', () => {
	const currentYOffset = window.scrollY

	if (currentYOffset > lastScrollYPos) {
		navbar.classList.remove('show-navbar')
		navbar.classList.add('hide-navbar')
	} else {
		navbar.classList.remove('hide-navbar')
		navbar.classList.add('show-navbar')
	}

	lastScrollYPos = currentYOffset < 0 ? 0 : currentYOffset
})

// Scroll down to text on click on navigation arrow
arrowDown.addEventListener('click', () =>
	targetElement.scrollIntoView({
		left: 0,
		block: 'start',
		behavior: 'smooth',
	}),
)
