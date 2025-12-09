// Открытие и закрытие бургер-меню
const burgerBtn = document.getElementById('burger-menu')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('body--active')
})

// Ждем загрузки всей страницы
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader")

  // Добавляем небольшую задержку для плавного исчезновения
  setTimeout(function () {
    preloader.classList.add("hidden")

    // Удаляем прелоадер из DOM после анимации
    setTimeout(function () {
      preloader.style.display = "none"
      // Обновляем AOS после скрытия прелоадера
      if (typeof AOS !== "undefined") {
        AOS.refresh()
      }
    }, 500)
  }, 2000) // 1 секунда минимальной загрузки
})