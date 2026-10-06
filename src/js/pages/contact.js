const form = document.querySelector('#contactForm')
const message = document.querySelector('#formMessage')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  message.textContent = 'Thanks! Your message has been sent.'
  message.hidden = false

  form.reset()
})