// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const block = document.querySelector('.block')

block.addEventListener('mouseenter', () => {
  block.classList.add('active')
})

block.addEventListener('mouseleave', () => {
  block.classList.remove('active')
})

// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

const colorBtn = document.querySelector('#colorButton')
const colorBlock = document.querySelector('#colorBlock')

function random() {
  return Math.floor(Math.random() * 256)
}

colorBtn.addEventListener('click', () => {
  colorBlock.style.background = `rgb(${random()}, ${random()}, ${random()})`
})
