// Создание модального окна
// 1. Создать общий контейнер, в него вложить контент для будущего содержимого модального окна
// 2. Создать кнопку, по которому модалка будет вызываться
// 3. В контейнере для контента модального окна создать кнопку, по которой оно будет закрываться
// 4. Стили. Сам контейнер modal должен содерждать 100% ширину чтобы не уменьшится при position fixed до ширины контента и обязательный атрибут любой модалки height: 100vh; изначально чтобы скрыть блок надо повесить display none
// 5. делаем визуально выделяющимся контентосодержимый блок modal__container например
// 6. идем в js, там реализуем событие открытия по клику на кнопку. Надо навесить стиль display flex или block
// Доп задачи:
// по клику на кнопку закрыть - закрываем модалку. Так же по нажатию на пространство модального окна закрыть его. Но только по нажатию на все кроме контент блока modal__container.

const btnModalOpenEl = document.querySelector('#modal-open')
const btnCloseEl = document.querySelector('#close')
const modalEL = document.querySelector('.modal')

btnModalOpenEl.addEventListener('click', () => {
  modalEL.style.display = 'block'
})

btnCloseEl.addEventListener('click', () => {
  modalEL.style.display = 'none'
})

modalEL.addEventListener('click', () => {
  modalEL.style.display = 'none'
})

// Напишите код, который расширяет функциональность всех массивов таким образом, чтобы метод `array.last()` можно было вызвать для любого массива, и он возвращал бы последний элемент. Если в массиве нет элементов, метод должен возвращать -1.
// Предположим, что массив является результатом выполнения метода `JSON.parse`.
Array.prototype.last = function () {
  const last = this[this.length - 1]
  return last ? last : -1
}

const arr = []
console.log(arr.last())
