// 1. Фильтрация чисел
// Есть массив чисел. Напиши функцию, которая возвращает только числа больше 10.
const numbers = [1, 2, -35, 6, -2, 56, 34, 23, -69, 4, 5, 6, 3]

const numbersMoreTen = (arr) => arr.filter((item) => item > 10)
console.log('--1--', numbersMoreTen(numbers))

// 2. Удвоение значений
// Есть массив чисел. Функция должна вернуть новый массив, где каждое число умножено на 2.

const doubleNumbers = (arr) => arr.map((item) => item * 2)
console.log('--2--', doubleNumbers(numbers))

// 3. Подсчёт суммы
// Есть массив чисел. Напиши функцию, которая возвращает сумму всех элементов.

const sumNumbers = (arr) => arr.reduce((sum, item) => sum + item, 0)
console.log('--3--', sumNumbers(numbers))

// 4. Строки определённой длины
// Есть массив строк. Верни только строки длиной больше 5 символов.

const strings = [
  'igor',
  'apple',
  'aleksey',
  'pasha',
  'vasya',
  'innokentiy',
  'aleksandr',
  'alla',
  'admin',
]

const strMoreFive = (arr) => arr.filter((item) => item.length > 5)
console.log('--4--', strMoreFive(strings))

// 5. Преобразование массива объектов
// Есть массив объектов { name, age }.
// Верни массив только из имён.
const users = [
  { name: 'Dmitry', age: 34 },
  { name: 'Olga', age: 28 },
  { name: 'Ivan', age: 16 },
  { name: 'Elena', age: 42 },
  { name: 'Max', age: 19 },
]

const namesOfUsers = (arr) => arr.map((item) => item.name)
console.log('--5--', namesOfUsers(users))

// 6. Поиск первого подходящего элемента
// Есть массив чисел. Найди первое число, которое делится на 3 без остатка.

const findFirstItem = (arr) => arr.find((item) => item % 3 === 0)
console.log('--6--', findFirstItem(numbers))

// 7. Проверка условия для всех элементов
// Есть массив чисел. Функция должна вернуть true, если все числа положительные.

const checkPositiveArr = (arr) => !arr.find((item) => item < 0)
console.log('--7--', checkPositiveArr(numbers))

// 8. Есть ли хотя бы один элемент
// Есть массив чисел. Проверь, есть ли хотя бы одно число больше 100.

const checkExistNumber = (arr) => !arr.find((item) => item < 100)
console.log('--8--', checkExistNumber(numbers))

// 9. Группировка по условию
// Есть массив чисел. Раздели их на два массива: чётные и нечётные (верни объект).

// const groupNumbers = (arr) => {
//   const even = []
//   const odd = []
//   arr.forEach((item) => {
//     item % 2 === 0 ? even.push(item) : odd.push(item)
//   })
//   return { even, odd }
// }

const groupNumbers = (arr) =>
  arr.reduce(
    (acc, item) => {
      item % 2 === 0 ? acc.even.push(item) : acc.odd.push(item)
      return acc
    },
    { even: [], odd: [] },
  )
console.log('--9--', groupNumbers(numbers))

// 10. Подсчёт элементов по условию
// Есть массив строк. Посчитай, сколько строк начинаются с буквы "a".

const countStr = (arr) =>
  arr.reduce((acc, str) => {
    if (str[0] === 'a') acc++
    return acc
  }, 0)

console.log('--10--', countStr(strings))

// Блок дом дерева

// 11. Работа со списком
// Есть <ul> с <li>.
// Собери текст всех li в массив строк.
const itemsLi = document.querySelectorAll('li')

// const liToArr = (arr) => [...arr].map((item) => item.textContent)
const liToArr = (arr) => {
  const values = []
  arr.forEach((item) => values.push(item.textContent))
  return values
}

console.log('--11--', liToArr(itemsLi))

// 12. Фильтрация DOM-элементов
// Есть несколько <div> с классами.
// Найди все элементы с классом active и сохрани их в массив.

const activeBlocks = [...document.querySelectorAll('.active')]

console.log('--12--', activeBlocks)

// 13. Изменение DOM через массив
// Есть массив строк.
// Создай <li> для каждой строки и добавь их в <ul>.

const list = document.querySelector('.list')

strings.map((string) => {
  const elementLi = document.createElement('li')
  elementLi.textContent = string
  list.append(elementLi)
})

// 14. Удаление элементов по условию
// Есть список <li>.
// Удалите все элементы, текст которых короче 4 символов.

itemsLi.forEach((li) => {
  if (li.textContent.length < 30) li.remove()
})

// 15. Поиск элемента
// Есть массив строк.
// Проверь, есть ли в массиве строка "admin".

const checkValue = (arr) => arr.includes('admin')
console.log('--15--', checkValue(strings))

// 16. Удаление элемента
// Есть массив чисел.
// Если число 5 есть в массиве — удали его.

const deleteNumber = (arr) => arr.filter((item) => item !== 5)
console.log('--16--', deleteNumber(numbers))

// 17. Проверка позиции
// Есть массив строк.
// Проверь, находится ли строка "apple" на первом месте.

const checkPosition = (arr) => !!arr.indexOf('apple') === 0
console.log('--17--', checkPosition(strings))

// Дана строка вида:

// "2024-01-28 | John Smith | Developer"
// Напиши функцию parseUser(str), которая:
// проверяет, что в строке ровно 2 символа |
// если не так — выбрасывает ошибку
// возвращает объект:

// {
//   date,
//   name,
//   role
// }

// Задача 2. Проверка пустых полей
// Строка вида:

// "10.10.2010 | | Manager"
// Напиши функцию parseEmployee(str), которая:
// проверяет количество |
// проверяет, что ни одно поле не пустое после trim()
// если какое-то поле пустое — ошибка
// возвращает объект с полями

//indexOf - показывает индекс искомого(то что ищем) элемента в массиве. Если в массиве несколько искомых элементов и мы хотим найти следующий элемент с таким же названием как первый необходимо указать индекс больше чем у первого элемента, тогда мы сразу надем второй по списку

// function parseData(str) {
//   // if(!str) {
//   //     throw new ErrorMask('amount of serators must be exactly 4')
//   // }
//   const p1 = str.indexOf('|')
//   //1. slice - делает срез от первого указанного индекса до последнего
//   // 2.trim() - убирает пробелы у строки с обеих сторон
//   const data = str.slice(0, p1).trim()
//   const p2 = str.indexOf('|', p1 + 1)
//   console.log(p2)
//   const fullName = str.slice(p1 + 1, p2).trim()
//   const job = str.slice(p2 + 1).trim()
//   return {
//     data,
//     fullName,
//     job,
//   }
// }

// const res = parseData('16.08.1997 | Yury Arakelov | Frontend')
// const res2 = parseData('28.01.2004 | Jerry Miklyaev | Backend')
// const res3 = parseData('11.02.1983 | Nikolay Naumov| Fullstack')
// //Делать проверку, если количество разделителей | больше или меньше 4 - дропать ошибка
// console.log(res)
// console.log(res2)
// console.log(res3)
