// Задание 1
// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.
// Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.
// При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const message = document.querySelector('.message')
const colors = ['blue', 'green', 'red', 'yellow']

let countClicks = 1
let countColors = 1

btn.addEventListener('click', () => {
  block.textContent = countClicks
  block.style.background = colors[countColors - 1]

  if (countClicks % 5 === 0) {
    block.style.background = `rgb(${random()}, ${random()}, ${random()})`
    countColors = 0
  }
  if (countClicks === 10) {
    message.textContent = 'Поздравляем! Вы достигли 10 кликов!'
  }
  countClicks++
  countColors++
})

function random() {
  return Math.floor(Math.random() * 256)
}
