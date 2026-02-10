// Задача 1
// Есть кнопка и блок.
// При клике на кнопку добавьте блоку класс active.
// Если класс уже есть — уберите его.

const box = document.querySelector('.box')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  box.classList.toggle('active')
})

// Задача 2
// Есть кнопка и текстовый абзац.
// При клике на кнопку измените цвет текста, добавляя класс red.

const text = document.querySelector('.text')

btn.addEventListener('click', () => {
  text.classList.add('red')
})

// Задача 3
// Есть список элементов (li).
// Изначально у элементов есть класс selected, при клике на один из li, он получает класс active.
// 2. Часть advanced. Как только пользователь тыкает на другой ли, с изначального ли снимается класс active и вешается на новый

const list = document.querySelector('.list')

list.addEventListener('click', (e) => {
  const li = e.target

  const activeLi = list.querySelector('.active')
  if (activeLi) {
    activeLi.classList.remove('active')
  }

  li.classList.add('active')
})

// Задача 4
// Есть кнопка и скрытый блок.
// При клике на кнопку показывайте или скрывайте блок с помощью класса hidden.

btn.addEventListener('click', () => {
  box.classList.toggle('hidden')
})

// Задача 5
// Есть две кнопки: ON и OFF, и один блок.
// При клике на ON добавьте блоку класс on.
// При клике на OFF удалите этот класс.

const block = document.querySelector('.block')
const btnOn = document.querySelector('.btn-on')
const btnOff = document.querySelector('.btn-off')

btnOn.addEventListener('click', () => {
  block.classList.add('on')
})

btnOff.addEventListener('click', () => {
  if (block.classList.contains('on')) {
    block.classList.remove('on')
  }
})

// Задача 3
// Есть блок и кнопка.
// При первом клике на кнопку блоку добавляется класс open.
// При втором клике:
// класс open остаётся
// но добавляется класс expandedПри третьем клике оба класса удаляются и цикл начинается заново.

const btnAdd = document.querySelector('.btn-add')

let i = 1
btnAdd.addEventListener('click', () => {
  const classes = block.classList
  if (i % 3 === 1) classes.add('open')
  if (i % 3 === 2) classes.add('expanded')
  if (i % 3 === 0) classes.remove('open', 'expanded')
  i++
})

// Задача 1
// Есть кнопка и список чисел (li).
// Создайте функцию clearActive(items), которая:
// принимает список элементов
// удаляет у всех класс active
// При клике на любой li:
// вызывается clearActive
// затем выбранному элементу добавляется класс active

const listNumbers = document.querySelector('.list-numbers')

const clearActive = (items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    item.classList.remove('active')
  }
}

listNumbers.addEventListener('click', (e) => {
  const li = e.target

  clearActive(listNumbers.children)

  li.classList.add('active')
})

// Задача 2
// Есть кнопка «Показать чётные».
// Есть список чисел от 1 до 10.
// Создайте функцию markEven(items), которая:
// проходит по списку
// добавляет класс even только чётным элементам
// Функция вызывается по клику на кнопку.

const btnShowEven = document.querySelector('.btn-show-even')

const markEven = (items) => {
  for (let i = 0; i < items.length; i = i + 2) {
    const item = items[i + 1]
    item.classList.toggle('even')
  }
}

btnShowEven.addEventListener('click', () => {
  markEven(listNumbers.children)
})

// Задача 3
// Есть кнопка и несколько блоков.
// Создайте функцию toggleBlocks(blocks), которая:
// по очереди (циклом)
// меняет класс visible у каждого блока
// При каждом клике:
// блоки переключаются по порядку, а не все сразу

const btnCircle = document.querySelector('.btn-circle')
const circles = document.querySelectorAll('.circle')

let count = 0
const toggleBlocks = (items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.classList.contains('bg-gray')) {
      item.classList.remove('bg-gray')
    }
  }
  if (count > 3) {
    count = count - 4
  }
  items[count].classList.add('bg-gray')
  count++
}

btnCircle.addEventListener('click', () => {
  toggleBlocks(circles)
})

// Задача 4
// Есть список li и кнопка «Удалить активный».
// Создайте функцию removeActiveItem(items), которая:
// находит элемент с классом active
// удаляет его из DOM
// Клик по li делает его активным.
// Клик по кнопке — удаляет активный элемент.
const btnRemoveActive = document.querySelector('.btn-remove-active');

btnRemoveActive.addEventListener('click', () => {
    
})

// Задача 5
// Есть несколько кнопок с числами.
// Есть отдельный блок для вывода суммы.
// Создайте функцию calculateSum(buttons), которая:
// проходит по кнопкам
// считает сумму чисел только активных
// При клике на кнопку:
// она переключает класс active
