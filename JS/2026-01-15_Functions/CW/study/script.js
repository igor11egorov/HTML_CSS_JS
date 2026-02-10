// Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".
console.log('--Task01--')

const greet = () => console.log('Hello, World!!!')
greet()

// Создайте функцию `square`, которая запрашивает у пользователя число, возводит его в квадрат и выводит результат.
console.log('--Task02--')

const square = (number) => console.log(number * number)
square(3)

// Напишите функцию `isEven`, которая запрашивает у пользователя число, проверяет его на четность и выводит результат в консоль.
console.log('--Task03--')

const isEven = (number) => console.log(isEven % 2 === 0 ? 'even' : 'odd')
isEven(9)

// Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.
console.log('--Task04--')

const concatenate = (str1, str2) => console.log(str1 + str2)
concatenate('qwqwq', '12121')

// 1. Проверка возраста
// Создайте функцию checkAge, которая:
// запрашивает у пользователя возраст
// если возраст 18 и больше — выводит "Доступ разрешён"
// иначе — "Доступ запрещён"
console.log('--Task1--')

function checkAge(age) {
  console.log(age >= 18 ? 'Доступ разрешён' : 'Доступ запрещён')
}
checkAge(13)
checkAge(23)

// 2. Сумма чисел массива
// Создайте функцию sumArray, которая:
// Принимает массив чисел
// с помощью цикла посчитать сумму чисел массива
// выводит сумму в консоль
console.log('--Task2--')

function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    sum += element
  }
  console.log(sum)
}

sumArray([1, 4, 3, 2, 4, 5, 6])
sumArray([0, 1, 1, 1, 1, 0, 1, 0, 1])

// 3. Объект пользователя
// Создайте функцию createUser, которая:
// запрашивает имя и возраст
// создаёт объект user с полями name и age
// если возраст меньше 18, добавляет поле status: "child"
// иначе status: "adult"
// выводит объект в консоль
console.log('--Task3--')

function createUser(name, age) {
  const user = {}
  user.name = name
  user.age = age
  user.status = age >= 18 ? 'adult' : 'child'
  console.log(user)
}

createUser('Igor', 43)
createUser('Aleks', 15)

// 4. Поиск чётных чисел
// Создайте функцию findEvenNumbers, которая:
// создаёт массив чисел [1, 2, 3, 4, 5, 6, 7, 8]
// с помощью цикла и if выводит только чётные числа
console.log('--Task4--')

function findEvenNumbers(length) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = i
    if (arr[i] % 2 === 0) {
      console.log(arr[i])
    }
  }
}

findEvenNumbers(12)

// 5. Проверка логина
// Создайте функцию checkLogin, которая:
// содержит массив допустимых логинов["admin", "user", "manager"]
// запрашивает логин у пользователя
// если логин найден в массиве — выводит "Добро пожаловать"
// иначе — "Доступ запрещён"
console.log('--Task5--')

function checkLogin(login) {
  arrLogins = [
    '123456',
    'password',
    '11-02-1982',
    'igor',
    'egorov',
    'Igor',
    'Egorov',
  ]
  let includesLogin = false
  for (let i = 0; i < arrLogins.length; i++) {
    const element = arrLogins[i]
    if (element === login) {
      includesLogin = true
      break
    }
  }
  console.log(includesLogin ? 'Добро пожаловать' : 'Доступ запрещён')
  //   console.log(
  //     arrLogins.includes(login) ? 'Добро пожаловать' : 'Доступ запрещён'
  //   )
}
checkLogin('igor')
checkLogin('EGOROV')

// Создайте функцию analyzeGrades, которая:
// создаёт объект grades, гдеключ — имя студента,значение — его оценка{
//   Anna: 85,
//   Ivan: 42,
//   Petr: 73,
//   Olga: 90
// }

// с помощью цикла for...in:
// выводит имя студента и оценку
// если оценка 60 и выше — выводит "Сдал"
// если меньше 60 — "Не сдал"
// в конце выводит:
// сколько студентов сдали

console.log('--Task6--')

function analyzeGrades() {
  const grades = {
    Anna: 85,
    Ivan: 42,
    Petr: 73,
    Olga: 90,
  }
  let countPassed = 0
  for (const key in grades) {
    const element = grades[key]
    if (element >= 60) {
      console.log(`${key} - ${element}. Сдал`)
      countPassed++
    } else {
      console.log(`${key} - ${element}. Не сдал`)
    }
  }
  console.log('--')
  console.log(`Сдали ${countPassed} чел.`)
}

analyzeGrades()

// Создайте функцию filterNumbers, которая:
// запрашивает у пользователя 5 чисел
// сохраняет их в массив
// создаёт два новых массива:
// positiveNumbers — числа больше 0
// negativeNumbers — числа меньше или равны 0
// с помощью цикла распределяет числа по массивам
// выводит оба массива в консоль
console.log('--Task7--')

const filterNumbers = (num1, num2, num3, num4, num5) => {
  const arr = [num1, num2, num3, num4, num5]
  const positiveNumbers = []
  const negativeNumbers = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    // element >= 0 ? positiveNumbers.push(element) : negativeNumbers.push(element)
    element >= 0
      ? (positiveNumbers[positiveNumbers.length] = element)
      : (negativeNumbers[negativeNumbers.length] = element)
  }
  console.log(positiveNumbers)
  console.log(negativeNumbers)
}
filterNumbers(2, 3, -4, -5, 6)

// Создайте функцию shoppingCart, которая:
// создаёт массив объектов cart:[
//   { name: "Apple", price: 3, quantity: 4 },
//   { name: "Bread", price: 2, quantity: 2 },
//   { name: "Milk", price: 4, quantity: 1 }
// ]
// с помощью цикла считает:
// стоимость каждого товара (price * quantity)
// общую стоимость корзины
// если общая сумма больше 20:
// выводит "Вам доступна скидка"
// иначе:
// "Скидка недоступна"
// выводит итоговую сумму
console.log('--Task8--')

function shoppingCart() {
  const cart = [
    { name: 'Apple', price: 3, quantity: 4 },
    { name: 'Bread', price: 2, quantity: 2 },
    { name: 'Milk', price: 4, quantity: 2 },
  ]
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i]
    let count = element.price * element.quantity
    sum += count
  }
  console.log(`Sum = ${sum}. ${sum > 20 ? 'Вам доступна скидка' : 'Скидка недоступна'}`)
}

shoppingCart()
