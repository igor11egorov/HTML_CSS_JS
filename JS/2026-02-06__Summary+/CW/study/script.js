// 1
// Написать функцию getMinNumber(arr), которая возвращает минимальное число массива.
const numbers = [4, 7, 1, 9, 3]

const getMinNumber = (arr) => arr.sort((a, b) => a - b)[0]
console.log('--1--', getMinNumber(numbers))

// 2
// Написать функцию getLongWord(arr), которая возвращает самое длинное слово.
const words = ['js', 'javascript', 'html', 'react']

const getLongWord = (arr) => arr.sort((a, b) => b.length - a.length)[0]
console.log('--2--', getLongWord(words))

// 3
// Написать функцию multiplyByTen(arr), которая возвращает новый массив,
// где каждое число умножено на 10.
{
  const numbers = [1, 2, 3, 4, 5]

  const multiplyByTen = (arr) => arr.map((item) => item * 10)
  console.log('--3--', multiplyByTen(numbers))
}

// 4
// Написать функцию getAdults(arr), которая возвращает пользователей старше 18 лет.
const users = [
  { name: 'Alex', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'John', age: 30 },
]

const getAdults = (arr) => arr.filter((item) => item.age > 18)
console.log('--4--', getAdults(users))

// 5
// Написать функцию getSum(arr), которая возвращает сумму чисел.
{
  const numbers = [10, 20, 30]

  const getSum = (arr) => arr.reduce((acc, number) => (acc += number), 0)
  console.log('--5--', getSum(numbers))
}

// 6
// Написать функцию getUniqueWords(arr), которая возвращает массив
// уникальных слов.
{
  const words = ['apple', 'banana', 'apple', 'orange', 'banana']
  const getUniqueWords = (arr) =>
    arr.reduce((acc, word) => {
      if (!acc.includes(word)) {
        acc.push(word)
      }
      return acc
    }, [])
  console.log('--6--', getUniqueWords(words))
}

// 7
// Написать функцию getTotalPrice(arr), которая возвращает
// общую стоимость всех товаров.
const products = [
  { name: 'Phone', price: 500 },
  { name: 'Book', price: 20 },
  { name: 'Laptop', price: 1500 },
]

const getTotalPrice = (arr) =>
  arr.reduce((acc, product) => (acc += product.price), 0)
console.log('--7--', getTotalPrice(products))

// 8
// Написать функцию getJsUsers(arr), которая возвращает пользователей,
// у которых есть навык "js".
{
  const users = [
    { name: 'Alex', skills: ['js', 'react'] },
    { name: 'Bob', skills: ['html'] },
    { name: 'John', skills: ['js', 'node'] },
  ]

  const getJsUsers = (arr) =>
    arr.filter((item) => item.skills.includes('js')).map((item) => item.name)
  console.log('--8--', getJsUsers(users))
}

// 9
// Написать функцию getOddNumbers(arr), которая возвращает нечётные числа.
{
  const numbers = [2, 5, 8, 11, 14]

  const getOddNumbers = (arr) => arr.filter((item) => item % 2 !== 0)
  console.log('--9--', getOddNumbers(numbers))
}

// 10
// Написать функцию getPopularPostTitles(arr), которая возвращает массив
// заголовков постов с likes > 10.
const posts = [
  { title: 'Post 1', likes: 10 },
  { title: 'Post 2', likes: 50 },
  { title: 'Post 3', likes: 5 },
]

const getPopularPostTitles = (arr) =>
  arr.filter((item) => item.likes > 10).map((item) => item.title)
console.log('--10--', getPopularPostTitles(posts))

// 11
// Написать функцию getEligibleUsers(arr), которая возвращает пользователей, которые:
// active === true
// age >= 18
// city === "SP" или city === "BH"
{
  const users = [
    { name: 'Alex', age: 17, active: true, city: 'SP' },
    { name: 'Bob', age: 25, active: false, city: 'RJ' },
    { name: 'John', age: 30, active: true, city: 'SP' },
    { name: 'Anna', age: 22, active: true, city: 'BH' },
  ]
  const getEligibleUsers = (arr) =>
    arr.filter(
      (item) =>
        item.active &&
        item.age >= 18 &&
        (item.city === 'SP' || item.city === 'BH'),
    )
  console.log('--11--', getEligibleUsers(users))
}

// 12
// Написать функцию getFinalPrices(arr), которая возвращает массив объектов вида:
// { name: "Phone", finalPrice: 450 }
// Правила:
// брать только товары inStock === true
// finalPrice = price - price * discount
// округлить finalPrice до целого
{
  const products = [
    { name: 'Phone', price: 500, discount: 0.1, inStock: true },
    { name: 'Laptop', price: 1500, discount: 0.2, inStock: false },
    { name: 'Book', price: 20, discount: 0, inStock: true },
    { name: 'TV', price: 800, discount: 0.15, inStock: true },
  ]

  const getFinalPrices = (arr) =>
    arr
      .filter((item) => item.inStock)
      .map(({ name, price, discount }) => ({
        name,
        finalPrice: Math.round(price - price * discount),
      }))

  console.log('--12--', getFinalPrices(products))
}

// 13 Создать функцию, которая возвращает Promise и успешно выполняется, если число больше 0, иначе завершается с ошибкой.
const positiveNumber = (number) => {
  return new Promise((res, rej) => {
    number > 0 ? res('--13--: Success') : rej('--13--: Error')
  })
}

positiveNumber(8)
  .then((res) => console.log(res, '1'))
  .catch((err) => console.log(err, '1'))

positiveNumber(-8)
  .then((res) => console.log(res, '2'))
  .catch((err) => console.log(err, '2'))

// 14 Создать функцию с Promise, которая проверяет длину строки: если длина больше 5 — resolve, иначе reject.
const lengthMoreFive = (str) => {
  return new Promise((res, rej) => {
    str.length > 5 ? res('--14--: Success') : rej('--14--: Error')
  })
}

lengthMoreFive('hello')
  .then((res) => console.log(res, '1'))
  .catch((err) => console.log(err, '1'))

lengthMoreFive('hello world!')
  .then((res) => console.log(res, '2'))
  .catch((err) => console.log(err, '2'))

// 15 Создать функцию, возвращающую Promise, которая проверяет, является ли число чётным.
const isEven = (number) => {
  return new Promise((res, rej) => {
    number % 2 === 0 ? res('--15--: Success') : rej('--15--: Error')
  })
}

isEven(8)
  .then((res) => console.log(res, '1'))
  .catch((err) => console.log(err, '1'))

isEven(5)
  .then((res) => console.log(res, '2'))
  .catch((err) => console.log(err, '2'))

// 16 Создать функцию с Promise, которая принимает два числа и завершается с ошибкой, если второе число равно 0.
const hasNull = (num1, num2) => {
  return new Promise((res, rej) => {
    num2 !== 0 ? res('--16--: Success') : rej('--16--: Error')
  })
}

hasNull(8, 0)
  .then((res) => console.log(res, '1'))
  .catch((err) => console.log(err, '1'))

hasNull(5, 12)
  .then((res) => console.log(res, '2'))
  .catch((err) => console.log(err, '2'))

// 17 Создать функцию, возвращающую Promise, которая проверяет возраст пользователя: resolve, если возраст 18 и больше, иначе reject.

const isAdult = (age) => {
  return new Promise((res, rej) => {
    age >= 18 ? res('--17--: Success') : rej('--17--: Error')
  })
}

isAdult(8)
  .then((res) => console.log(res, '1'))
  .catch((err) => console.log(err, '1'))

isAdult(25)
  .then((res) => console.log(res, '2'))
  .catch((err) => console.log(err, '2'))
