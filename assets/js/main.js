/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('.contact-form'),
      contactMessage = document.querySelector('.contact-message')

const sendEmail = e => {
  e.preventDefault()

  emailjs.sendForm('service_14qzlgw', 'template_6bmigmp', '#contact-form', '8MzHebo2K5mrQrvrd')
        .then(() => {
          contactMessage.textContent = 'Message sent successfully ✅'

          setTimeout(() => {
            contactMessage.textContent = ''
          }, 3000)
          contactForm.reset()
        }, () => {
          contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scrollup')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector(`.nav-menu a[href*='${sectionId}']`)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
