// const buttons = document.querySelectorAll('.button-apply-job')

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     button.textContent = 'Gracias'
//     button.classList.add('is-applied')
//     button.disabled = true
//   })
// })

const jobsSection = document.querySelector('.jobs')

jobsSection.addEventListener('click', (event) => {
  const element = event.target
  if (element.classList.contains('button-apply-job')) {
    element.textContent = 'Gracias'
    element.classList.add('is-applied')
    element.disabled = true
  }
})