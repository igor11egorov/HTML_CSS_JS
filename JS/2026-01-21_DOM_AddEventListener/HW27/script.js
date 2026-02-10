// Задание 1
// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

const list = document.querySelector('.list')
const itemsList = document.querySelectorAll('li')

if (itemsList.length > 6) {
  const newItemList = document.createElement('li')
  newItemList.textContent = 'Новый элемент заменяет старый'

  list.replaceChild(newItemList, itemsList[itemsList.length - 1])
}
