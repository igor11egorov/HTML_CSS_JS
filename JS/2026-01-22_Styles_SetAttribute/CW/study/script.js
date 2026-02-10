// const box = document.querySelector('.box')
// // box.style.backgroundColor = 'red'
// // box.setAttribute('style', 'border: 1px solid black; background-color: violet')
// box.style.cssText = `
//     background-color: lightblue;
//     color: red;
//     border: 1px solid teal;
//     padding: 20px;
// `
// console.log(box)

// У вас есть элемент. При клике на кнопку измените его ширину на 100px с использованием setAttribute.
// У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.
// У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.
const box = document.querySelector('.box')
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
  //   box.setAttribute('style', 'width: 100px;')
  box.style.cssText = `
    border: 2px solid teal;
    background-color: lightblue;
    padding: 10px`
  text.style.color = 'red'
})

// У вас есть несколько кнопок и блок текста. При клике на каждую кнопку, добавьте класс "active" к блоку текста. Если у блока уже есть этот класс, оставьте его без изменений.
// box.classList.add('new__box')
// console.log(box.classList)
// const newEl = document.createElement('div')
// newEl.textContent = 'hello world'
// newEl.classList.add('newEl')
// box.insertAdjacentElement('afterend', newEl)

const btns = document.querySelectorAll('.btn')
for (let i = 0; i < btns.length; i++) {
  const element = btns[i]
  element.addEventListener('click', () => {
    if (!box.classList.contains('active')) {
      box.classList.add('active')
    }
  })
}

// У вас есть кнопка и блок текста. При каждом клике на кнопку, переключайте видимость блока текста. Если блок виден, скройте его, и наоборот.

btns[1].addEventListener('click', () => {
  box.classList.toggle('display-none')
})

// .У вас есть блок текста. При двойном клике на блок текста, замените класс "original" на "changed". Если класс "changed" уже присутствует, замените его обратно на "original". Решите с помощью addEventListener и атрибута ondblclick.

box.classList.add('original')
box.addEventListener('dblclick', () => {
  if (box.classList.contains('original')) {
    box.classList.replace('original', 'changed')
  } else {
    box.classList.replace('changed', 'original')
  }
})

// У вас есть блок текста и несколько кнопок. При клике на каждую кнопку, удалите класс "highlight" у блока текста, если он присутствует.

box.classList.add('highlight')
btns[2].addEventListener('click', () => {
  if (box.classList.contains('highlight')) {
    box.classList.remove('highlight')
  }
})


