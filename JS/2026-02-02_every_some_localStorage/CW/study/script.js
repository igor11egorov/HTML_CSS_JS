// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
let numbers = [1, 2, -3, 4, 5]
const hasNegativ = numbers.some((item) => item < 0)
console.log('--1--', hasNegativ)

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
let strings = ['apple', 'banana', 'orange', 'watermelon']
const hasMoreTen = strings.some((item) => item.length > 10)
console.log('--2--', hasMoreTen)

// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
{
  let numbers = [1, 2, 3, 4, 5]
  const isPositive = numbers.every((item) => item > 0)
  console.log('--3--', isPositive)
}

// Проверьте, являются ли все элементы массива четными числами с помощью метода every().
{
  let numbers = [2, 4, 6, 8, 10]
  const isEven = numbers.every((item) => item % 2 === 0)
  console.log('--4--', isEven)
}

// Создайте массив чисел. Реализуйте функцию hasEvenNumber, используя метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.
{
  const numbers = [1, 3, 5, 6, 9]
  const hasEvenNumber = (arr) => arr.some((item) => item % 2 === 0)
  console.log('--5--', hasEvenNumber(numbers))
}

// Создайте массив строк. Реализуйте функцию hasStringWithA, используя метод some, чтобы проверить, содержит ли массив хотя бы одну строку с буквой "a".
const words = ['banana', 'orange', 'kiwi', 'pear']
const hasStringWithA = (arr) => arr.some((item) => item.includes('a'))
console.log('--6--', hasStringWithA(words))

// Создайте массив чисел. Реализуйте функцию areAllMultiplesOfThree, используя метод every, чтобы проверить, что все числа в массиве кратны 3.
{
  const numbers = [3, 6, 9, 12]
  const areAllMultiplesOfThree = (arr) => arr.every((item) => item % 3 === 0)
  console.log('--7--', areAllMultiplesOfThree(numbers))
}

// Создайте массив объектов с полями "name" и "age". Реализуйте функцию hasPersonWithAge, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с определенным возрастом.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 28 },
]
const hasPersonWithAge = (arr, targetAge) =>
  arr.some((item) => item.age === targetAge)
console.log('--8--', hasPersonWithAge(people, 32))
console.log('--8--', hasPersonWithAge(people, 30))

// 1
// const numbers = [3, 7, 2, 9, 4]
// Написать функцию getMaxNumber(arr), которая возвращает наибольшее число из массива.
// 2
// const words = ["apple", "hi", "banana", "cat", "developer"]
// Написать функцию getShortWords(arr), которая возвращает слова короче 5 символов.
// 3
// const numbers = [1, 2, 3, 4, 5]
// Написать функцию squareNumbers(arr), которая возвращает массив квадратов чисел.
// 4
// const users = [
//   { name: "Alex", age: 16 },
//   { name: "Bob", age: 21 },
//   { name: "John", age: 30 },
// ]
// Написать функцию getAdultUsers(arr), которая возвращает массив пользователей старше 18 лет.
// 5
// const numbers = [10, 20, 30, 40]
// Написать функцию getAverage(arr), которая возвращает среднее значение чисел.

// Эти поинтереснее:

// Написать функцию getBigOrders(arr), которая возвращает заказы с amount > 50.
const orders = [
  { id: 1, amount: 50 },
  { id: 2, amount: 120 },
  { id: 3, amount: 30 },
]

const getBigOrders = (arr) => arr.filter((item) => item.amount > 50)
console.log('--9--', getBigOrders(orders))

// Написать функцию getUniqueWords(arr), которая возвращает массив уникальных слов.
{
  const words = ['js', 'react', 'node', 'react', 'js', 'js']
  const getUniqueWords = (arr) =>
    arr.reduce((acc, word) => {
      if (!acc.includes(word)) {
        acc.push(word)
      }
      return acc
    }, [])
  console.log('--10--', getUniqueWords(words))
}

// Написать функцию getCheapProductNames(arr), которая возвращает имена товаров
// дешевле 100.
const products = [
  { name: 'Phone', price: 500 },
  { name: 'Book', price: 20 },
  { name: 'Laptop', price: 1500 },
]

const getCheapProductNames = (arr) =>
  arr.filter((item) => item.price < 100).map((item) => item.name)
console.log('--11--', getCheapProductNames(products))

// Написать функцию getSumOfEven(arr), которая возвращает сумму чётных чисел.
{
  const numbers = [1, 2, 3, 4, 5, 6]
  const getSumOfEven = (arr) =>
    arr.reduce((acc, number) => {
      if (number % 2 === 0) {
        acc += number
      }
      return acc
    }, 0)
  console.log('--12--', getSumOfEven(numbers))
}

// Написать функцию getJsUsers(arr), которая возвращает пользователей,
// у которых есть навык "js".
const users = [
  { name: 'Alex', skills: ['js', 'react'] },
  { name: 'Bob', skills: ['html', 'css'] },
  { name: 'John', skills: ['js', 'node'] },
]
const getJsUsers = (arr) => arr.filter((item) => item.skills.includes('js'))
console.log('--13--', getJsUsers(users))

// Написать функцию `getPopularPosts(arr)`, которая возвращает посты с `likes > 20`
const posts = [
  { id: 1, likes: 10 },
  { id: 2, likes: 55 },
  { id: 3, likes: 30 },
]
const getPopularPosts = (arr) => arr.filter((item) => item.likes > 20)
console.log('--14--', getPopularPosts(posts))

// Написать функцию `getCartTotal(arr)`, которая возвращает
// общую стоимость корзины (price * quantity)

const cart = [
  { name: 'Phone', price: 500, quantity: 2 },
  { name: 'Book', price: 20, quantity: 3 },
  { name: 'Laptop', price: 1500, quantity: 1 },
]
const getCartTotal = (arr) =>
  arr.reduce((acc, cart) => (acc += cart.price * cart.quantity), 0)
console.log('--15--', getCartTotal(cart))

// Создадим кнопку, которая переключает значение localStorage из 1 в 0 и обратно.
const btn = document.querySelector('.btn')
localStorage.setItem('value', '0')

btn.addEventListener('click', () => {
  const getLS = localStorage.getItem('value')
  getLS === '0'
    ? localStorage.setItem('value', '1')
    : localStorage.setItem('value', '0')
})

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.
const submit = document.querySelector('#btn')
const input = document.querySelector('#input')

submit.addEventListener('click', () => {
  localStorage.setItem('fromInput', input.value)
})

// 3.  К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода. А так же создает  на странице то что пользователь ввел в инпут
const fromLS = document.querySelector('.fromLS')
const message = document.querySelector('.text')

fromLS.addEventListener('click', () => {
  const valueFromLS = localStorage.getItem('fromInput')
  message.textContent = input.value
  input.value = valueFromLS
})

// 4. Добавить кнопку, которая очищает localStorage.
const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
  localStorage.clear()
})
