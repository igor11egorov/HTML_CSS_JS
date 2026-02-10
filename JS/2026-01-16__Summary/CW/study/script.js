// Объявить 2 переменные, возраст и рост
// Если рост больше 140 см и возраст больше 12 лет
// То выводим сообщение, что ребенок может пройти на аттракцион
console.log(`--Task1--`)

const age = 15
const height = 180

if (age >= 12 && height > 140) {
  console.log(`Can pass`)
}

// Создайте функцию которая принимает параметром массив чисел и проходит по нему возводя каждое число, что больше 3 в квадрат, а каждое число, что меньше 3 умножает на 10
console.log(`--Task2--`)

const calculate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      arr[i] = arr[i] * arr[i]
    } else {
      arr[i] = arr[i] * 10
    }
  }
  return arr
}
console.log(calculate([2, 3, 6, 7, 8, 1, 2, 0, -3]))

// Создайте функцию, которая принимает параметром массив чисел и проходит по нему, увеличивая каждое число, которое чётное, на 5, а каждое число, которое нечётное, уменьшает на 1.
console.log(`--Task3--`)
const calculate1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] % 2 === 0 ? arr[i] + 5 : arr[i] - 1
  }
  return arr
}
console.log(calculate1([2, 3, 4, 5, 7, 8]))

// Задание 1:
// Создайте функцию, которая принимает параметром массив чисел и проходит по нему, умножая каждое число, которое больше 10, на 2, а каждое число, которое меньше или равно 10, уменьшает на 3.
console.log(`--Task4--`)

const changeArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      arr[i] = arr[i] * 2
    } else {
      arr[i] = arr[i] - 3
    }
  }
  return arr
}
console.log(changeArr([2, 3, 1, 2, 10, 13]))

// Задание 2:
// Создайте функцию, которая принимает параметром массив чисел и проходит по нему, деля каждое число, которое кратно 3, на 3, а каждое число, которое не кратно 3, увеличивает на 7.
console.log(`--Task5--`)

const changeArr1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr[i] = arr[i] / 3
    } else {
      arr[i] = arr[i] + 7
    }
  }
  return arr
}
console.log(changeArr1([2, 3, 1, 2, 10, 13]))

// Задание 3:
// Создайте функцию, которая принимает параметром массив чисел и проходит по нему, возводя в квадрат каждое число, которое отрицательное, а каждое число, которое положительное, умножает на 4.
console.log(`--Task6--`)

const changeArr2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = Math.pow(arr[i], 2)
    } else {
      arr[i] = arr[i] * 7
    }
  }
  return arr
}
console.log(changeArr2([2, -3, 1, 2, -10, 13]))

// Создайте объект user со свойствами name, age и isStudent.
// Напишите функцию, которая принимает этот объект и выводит в консоль:
// "Доступ разрешён" — если пользователю 18 лет и больше
// "Доступ ограничен" — если меньше 18
console.log(`--Task7--`)

const user = {
  name: 'Иван',
  age: 20,
  isStudent: true,
}

const checkStudent = (obj) => {
  console.log(obj.age >= 18 ? 'Доступ разрешён' : 'Доступ ограничен')
}
checkStudent(user)

// Создайте функцию, которая принимает массив чисел и проходит по нему,
// выводя в консоль:
// "Положительное" — если число больше 0
// "Отрицательное" — если меньше 0
// "Ноль" — если равно 0
console.log(`--Task8--`)

const checkPosNeg = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element > 0) {
      console.log(element, 'Pos')
    } else if (element < 0) {
      console.log(element, 'Neg')
    } else {
      console.log('Null')
    }
  }
}

checkPosNeg([1, 2, 3, 0, 0, -6, -7, 6, -8])

// Создайте объект grades, где ключ — название предмета, а значение — оценка.
// Пройдитесь по объекту с помощью цикла и выведите в консоль:
// название предмета
// "Сдал" — если оценка 60 и выше
// "Не сдал" — если меньше 60
console.log(`--Task9--`)
//  задачу изменил на подсчет суммы оценок
const grades = {
  math: 5,
  physics: 4,
  chemistry: 5,
  biology: 4,
  history: 5,
  geography: 4,
  literature: 5,
  russian: 4,
  english: 3,
  german: 4,
  informatics: 5,
  algebra: 5,
  geometry: 4,
  economics: 3,
  philosophy: 5,
  sociology: 4,
  law: 5,
  art: 5,
  music: 4,
  pe: 5,
}

const checkPass = (obj) => {
  let countSum = 0
  for (const key in obj) {
    const element = obj[key]
    countSum += element
  }
  console.log(countSum >= 60 ? `Pass` : `Don't pas`)
}
checkPass(grades)

// Создайте функцию, которая принимает параметры age и hasTicket.
// Функция должна выводить:
// "Можно пройти" — если возраст 18+ И есть билет
// "Можно пройти с сопровождением" — если возраст меньше 18 И есть билет
// "Проход запрещён" — если нет билета
console.log(`--Task10--`)

const check = (age, hasTicket) => {
  if (age >= 18 && hasTicket) {
    console.log('Можно пройти')
  } else if (age < 18 && hasTicket) {
    console.log('Можно пройти с сопровождением')
  } else {
    console.log('Проход запрещён')
  }
}

check(19, true)
check(17, true)
check(19, false)
check(17, false)

// Создайте массив объектов products, где каждый объект содержит:
// name
// price
// inStock
// Пройдитесь по массиву и выведите в консоль названия товаров, которые:
// стоят меньше 100
// И есть в наличии
console.log(`--Task11--`)

const products = [
  { name: 'Хлеб', price: 95, inStock: true },
  { name: 'Молоко', price: 110, inStock: true },
  { name: 'Сыр', price: 130, inStock: false },
  { name: 'Яблоки', price: 90, inStock: true },
  { name: 'Сок', price: 105, inStock: true },
  { name: 'Печенье', price: 85, inStock: false },
  { name: 'Йогурт', price: 100, inStock: true },
]

const checkLessHundert = (obj) => {
  for (const key in obj) {
    const element = obj[key]
    if (element.price < 100 && element.inStock) {
      console.log(element.name)
    }
  }
}

checkLessHundert(products)
