// Открытие и закрытие бургер-меню
const burgerBtn = document.getElementById('burger-menu')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('body--active')
})