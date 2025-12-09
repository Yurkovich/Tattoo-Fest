// Открытие и закрытие бургер-меню
const burgerBtn = document.getElementById("burger-menu")
const body = document.querySelector("body")
const header = document.querySelector(".header")

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    body.classList.toggle("body--active")
  })
}

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
