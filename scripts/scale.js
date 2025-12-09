// Масштабирование страницы под разные разрешения
const baseWidth = 1920
const baseHeight = 1080

function scalePage() {
  const wrapper = document.querySelector(".wrapper")
  if (!wrapper) return

  const scaleX = window.innerWidth / baseWidth
  const scaleY = window.innerHeight / baseHeight
  const scale = Math.min(scaleX, scaleY)

  wrapper.style.transform = `scale(${scale})`
  wrapper.style.transformOrigin = "top center"
  wrapper.style.width = `${baseWidth}px`
  wrapper.style.minHeight = `${baseHeight}px`
}

window.addEventListener("resize", scalePage)
window.addEventListener("load", scalePage)
scalePage()
