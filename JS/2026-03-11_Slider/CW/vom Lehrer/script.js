const carousel = document.querySelector('[data-carousel]')
const track = carousel.querySelector('.carousel__track')
const slides = Array.from(track.children)
const btnPrev = carousel.querySelector('[data-dir="prev"]')
const btnNext = carousel.querySelector('[data-dir="next"]')
const dotsContainer = carousel.querySelector('.carousel__dots')
const status = carousel.querySelector('.carousel__status')

let index = 0
const dots = slides.map((_, i) => {
  const dot = document.createElement('button')
  dot.className = 'carousel__dot'
  dot.type = 'button'
  dot.setAttribute('aria-label', `Slide ${i + 1}`)
  dot.addEventListener('click', () => {
    index = i
    update()
  })
  dotsContainer.append(dot)
  return dot
})

function update() {
  track.style.transform = `translateX(-${index * 100}%)`
  dots.forEach((item, i) => {
    item.classList.toggle('is-active', i === index)
  })
  btnPrev.disabled = index === 0
  btnNext.disabled = index === slides.length - 1
  status.textContent = `Slide ${index + 1} of ${slides.length}`
}

btnNext.addEventListener('click', () => {
  index = Math.min(slides.length - 1, index + 1)
  update()
})

btnPrev.addEventListener('click', () => {
  index = Math.max(0, index - 1)
  update()
})

update()
