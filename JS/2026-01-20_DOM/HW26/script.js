// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

const block = document.querySelector('.block')

block.innerHTML = `Это <em>курсивный</em> текст`

// Создайте HTML-страницу с кнопкой. При клике на кнопку измените текст внутри элемента <p> на «Текст изменён».

const text = document.createElement('p')
text.textContent = 'Изначальный текст'
text.setAttribute('class', 'text')
block.append(text)

const btn = document.createElement('button')
btn.setAttribute('class', 'btn')
btn.textContent = 'Click me!'
block.append(btn)

btn.onclick = () => {
  text.textContent = 'Текст изменён'
}

// На странице есть список <ul> с несколькими <li>. Напишите код, который при загрузке страницы перебирает все <li> и окрашивает каждый второй элемент в серый цвет.

const itemsLi = document.querySelectorAll('li')
// for (let i = 0; i < itemsLi.length; i = i + 2) {
//   itemsLi[i + 1].textContent = 'New text from JS'
//   itemsLi[i + 1].style.background = 'gray'
// }

// Создайте форму с полем ввода и кнопкой. При нажатии на кнопку берите значение из input и добавляйте новый элемент <li> в конец списка <ul>.

const btnForm = document.querySelector('.btn-form')
const input = document.querySelector('.input')
const list = document.querySelector('.list')
console.log(input)

btnForm.onclick = (e) => {
  e.preventDefault()

  const newLi = document.createElement('li')
  newLi.textContent = input.value
  list.append(newLi)
  input.value = ''
}

// На странице есть несколько элементов с классом box. Напишите код, который находит все такие элементы и добавляет каждому рамку 2px solid black.
// Создайте кнопку и блок <div>. При каждом клике на кнопку создавайте новый <span> с текстом «Новый элемент» и добавляйте его внутрь этого <div>.
