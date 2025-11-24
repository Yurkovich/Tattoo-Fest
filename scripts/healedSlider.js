let next = document.querySelector(".healed-slider__btn--next")
let prev = document.querySelector(".healed-slider__btn--prev")

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".healed-slider__item")
  document.querySelector(".healed-slider__track").append(items[0])
})

prev.addEventListener("click", () => {
  let items = document.querySelectorAll(".healed-slider__item")
  document.querySelector(".healed-slider__track").prepend(items[items.length - 1])
})
