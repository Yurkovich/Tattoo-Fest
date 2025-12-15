// Открытие и закрытие бургер-меню
const burgerBtn = document.getElementById("burger-menu")
const body = document.querySelector("body")
const header = document.querySelector(".header")

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    body.classList.toggle("body--active")
  })
}

// Подложка у шапки при скролле
function handleScroll() {
  if (!header || !body) return

  const scrollY = body.scrollTop
  
  if (scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

if (body) {
  body.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll()
}


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


