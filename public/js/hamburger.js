// Toggle navbar icon on click
const hamburgerIconLines = document.querySelectorAll(
	'.hamburger-open-icon-line',
)
const logo = document.querySelector('.logo')

let menuIsOpen = false
const hamburgerButton = document.querySelector('.hamburger-nav-button')
hamburgerButton.addEventListener('click', () => {
	menuIsOpen = !menuIsOpen

	// Disable scrolling, when the menu is open
	if (menuIsOpen) {
		const currentOffsetY = window.scrollY
		document.body.style.position = 'fixed'
		document.body.style.top = `${-currentOffsetY}px`
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

const navbar = document.querySelector('.main-nav')
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
