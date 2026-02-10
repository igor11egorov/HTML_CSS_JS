// 1. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
const numbers = [-2, 5, -8, 10, -3, 7]

console.log('--1--', filterPositiveNumbers(numbers))

function filterPositiveNumbers(arr) {
  return arr.filter((number) => number > 0)
}

// 2. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
{
  const numbers = [9, 12, 5, 18, 7, 24]

  console.log('--2--', filterDevidedByThreeNumbers(numbers))

  function filterDevidedByThreeNumbers(arr) {
    return arr.filter((number) => number % 3 === 0)
  }
}

// 3. Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
const animals = ['cat', 'dog', 'rabbit']
animals.pop()
console.log('--3--', animals)

// 4. Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
const letters = ['A', 'B', 'C']
const lastLetter = letters.pop()
console.log('--4--', lastLetter)

// 5. Используя метод sort(), отсортируйте числовой массив по убыванию.
{
  let array = [4, 2, 5, 1, 3]
  array.sort((a, b) => b - a)
  console.log('--5--', array)
}

// 6. Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.
{
  let array = [1, 2, 3, 4, 5]
  const newArray = array.filter((item) => item % 2 === 0)
  console.log('--6--', newArray)
}

// 7. Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape']

console.log('--7--', sortLength(words))

function sortLength(arr) {
  return arr.sort((a, b) => a.length - b.length)
}

// 8. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа в определенном диапазоне.
{
  const numbers = [15, 7, 28, 3, 42, 10]
  const minRange = 10
  const maxRange = 30

  console.log('--8--', filterNumbersByRange(numbers, minRange, maxRange))

  function filterNumbersByRange(arr, min, max) {
    return arr.filter((number) => number >= min && number <= max)
  }
}

// 9. Создайте массив чисел. Напишите функцию, используя метод sort, чтобы отсортировать числа в порядке убывания.
{
  const numbers = [10, 5, 8, 2, 7, 3]

  console.log('--9--', sortNumbers(numbers))

  function sortNumbers(arr) {
    return arr.sort((a, b) => b - a)
  }
}

// 10. Чётные числа
// Есть массив чисел:
// Задача:
// Получить новый массив только из чётных чисел.
{
  const numbers = [1, 4, 7, 10, 13, 16, 20]

  const evenNumbers = numbers.filter((number) => number % 2 === 0)
  console.log('--10--', evenNumbers)
}

// 11. Длинные строки
// Есть массив строк:
// Задача:
// Отфильтровать слова, длина которых больше 3 символов.
{
  const words = ['cat', 'elephant', 'dog', 'giraffe', 'fox']

  const filteredWords = words.filter((word) => word.length > 3)
  console.log('--11--', filteredWords)
}

// 12. Активные пользователи
// Есть массив объектов:
// Задача:
// Получить массив только активных пользователей.
const users = [
  { name: 'Alex', active: true },
  { name: 'Bob', active: false },
  { name: 'John', active: true },
]

const activeUsers = users.filter((user) => user.active)
console.log('--12--', activeUsers)

// 13. Фильтрация по диапазону
// Есть массив чисел:
// Задача:
// Получить числа, которые больше 10 и меньше 50.
{
  const numbers = [5, 12, 8, 130, 44, 3, 25]
  const filterNumbersByRange = numbers.filter(
    (number) => number > 10 && number < 50,
  )
  console.log('--13--', filterNumbersByRange)
}

// 14. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
{
  const numbers = [5, 10, 15, 20]

  console.log('--14--', sum(numbers))

  function sum(arr) {
    return (sum = arr.reduce((acc, currentValue) => {
      return acc + currentValue
    }))
  }
}

// 15. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
{
  const words = ['Hello', ' ', 'world', '!']

  console.log('--15--', joinString(words))

  function joinString(arr) {
    return (strJoin = arr.reduce((acc, currentWord) => acc + currentWord, ''))
  }
}

// 16. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
{
  const numbers = [14, 5, 22, 8, 45, 11]

  console.log('--16--', maxNumber(numbers))

  function maxNumber(arr) {
    return arr.reduce((max, currentNumber) => Math.max(max, currentNumber))
  }
}

// 17. Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
const colors = ['red', 'green', 'blue']

colors.shift()
console.log('--17--', colors)

// 18. Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
const fruits = ['banana', 'orange']

fruits.unshift('apple', 'grape')
console.log('--18--', fruits)

// 19
// Написать функцию getEvenNumbers(arr), которая возвращает массив чётных чисел.
{
  const numbers = [1, 2, 3, 4, 5, 6]

  console.log('--19--', getEvenNumbers(numbers))

  function getEvenNumbers(arr) {
    return arr.filter((number) => number % 2 === 0)
  }
}

// 20
// Написать функцию getLongWords(arr), которая возвращает слова длиной больше 4.
{
  const words = ['hi', 'hello', 'world', 'js', 'developer']

  const getLongWords = (arr) => arr.filter((word) => word.length > 4)

  console.log('--20--', getLongWords(words))
}

// 21
// Написать функцию doubleNumbers(arr), которая возвращает массив чисел, умноженных на 2.
{
  const numbers = [1, 2, 3, 4]

  const doubleNumbers = (arr) => arr.map((number) => number * 2)

  console.log('--21--', doubleNumbers(numbers))
}

// 22
// Написать функцию getUserNames(arr), которая возвращает массив имён пользователей.
{
  const users = [
    { name: 'Alex', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'John', age: 20 },
  ]

  const getUserNames = (arr) => arr.map((user) => user.name)

  console.log('--22--', getUserNames(users))
}

// 23
// Написать функцию sumNumbers(arr), которая возвращает сумму чисел.
{
  const numbers = [5, 10, 15]

  const sumNumbers = (arr) =>
    arr.reduce((acc, currentNumber) => acc + currentNumber)

  console.log('--23--', sumNumbers(numbers))
}

// 24
// Написать функцию countWords(arr), которая возвращает объект с количеством каждого слова.
{
  const words = ['apple', 'banana', 'apple', 'orange', 'banana']

  const countWords = (arr) =>
    arr.reduce((acc, currentWord) => {
      if (acc[currentWord]) {
        acc[currentWord]++
      } else {
        acc[currentWord] = 1
      }
      return acc
    }, {})

  console.log('--24--', countWords(words))
}

// Чуть сложнее
// 25
// Написать функцию getActiveAdultNames(arr), которая возвращает массив имён пользователей,
// которые активны и старше 18 лет.
{
  const users = [
    { name: 'Alex', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'John', age: 30, active: false },
    { name: 'Anna', age: 22, active: true },
  ]
  // Вариант 1
  //   const getActiveAdultNames = (arr) =>
  //     arr.filter((user) => user.age > 18 && user.active).map((user) => user.name)

  // Вариант 2
  // begin
  const getActiveAdultNames = (arr) =>
    arr.reduce((acc, user) => {
      if (user.age > 18 && user.active) {
        acc.push(user.name)
      }
      return acc
    }, [])
  // end
  console.log('--25--', getActiveAdultNames(users))
}

// 26
// Написать функцию getTotalTechPrice(arr), которая возвращает общую стоимость товаров
// категории "tech".
const products = [
  { name: 'Phone', price: 500, category: 'tech' },
  { name: 'TV', price: 800, category: 'tech' },
  { name: 'Book', price: 20, category: 'other' },
  { name: 'Laptop', price: 1500, category: 'tech' },
]

const getTotalTechPrice = (arr) =>
  arr.reduce((acc, currentProduct) => {
    if (currentProduct.category === 'tech') {
      acc += currentProduct.price
    }
    return acc
  }, 0)

console.log('--26--', getTotalTechPrice(products))

// 27. необходимо вывести данные пробрасываемые в колбек. особенность данной функции - она выполнится лишь один раз, при повторном вызове всегда будет undefined
function once(fn) {
  let flag = false
  return function (...data) {
    if (flag) return
    flag = true
    return fn(...data)
  }
}

const res = once(() => 'hello')
console.log('--27--', res())
console.log('--27--', res())

// 28. Создайте пустой массив stack. Реализуйте функцию pushToStack, которая добавляет числа 1, 2, 3 в стек, а затем реализуйте функцию popFromStack, которая удаляет последнее число из стека.
const stack = []

const pushToStack = (arr) => {
  arr.push(1, 2, 3)
  return arr
}
console.log('--28--', pushToStack(stack))

const popFromStack = (arr) => {
  arr.pop()
  return arr
}
console.log('--28--', popFromStack(stack))

// 29. Создайте массив чисел. Реализуйте функцию doubleEvenNumbers, используя методы map и filter, чтобы удвоить значения только четных чисел.
{
  const numbers = [1, 2, 3, 4, 5]

  const doubleEvenNumbers = (arr) =>
    arr.filter((number) => number % 2 === 0).map((number) => number * 2)

  console.log('--29--', doubleEvenNumbers(numbers))
}

// 30. Создайте массив строк. Реализуйте функцию addExclamation, используя метод forEach, чтобы добавить к каждой строке восклицательный знак "!".
const phrases = ['Hello', 'How are you', 'Goodbye']

const addExclamation = (arr) => {
  const newPhrases = []
  arr.forEach((phrase) => newPhrases.push(`${phrase}!`))
  return newPhrases
}

console.log('--30--', addExclamation(phrases))
