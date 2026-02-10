// 1. Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.
{
  const arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push(i)
    // arr[i-1] = i
  }

  console.log(arr)
}

// 2. Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5]
  const printElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      console.log(element)
    }
  }

  printElement(numbers)
}

// 3. Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.
{
  const strings = ['sdsd', 'dfd', 'dfdfs', 'wewe', 'jkjk']
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5]

  const search = (arr, wanted) => {
    let i = 0
    let message = "It doesn't have"
    do {
      if (arr.includes(wanted)) {
        message = 'It has'
        break
      }
      i++
    } while (i < arr.length)
    console.log(message)
  }
  search(strings, 'a')
  search(strings, 'dfd')
  search(strings, 'sdsd')
  search(strings, 'jkjk')
  search(strings, 'dfdr')
  console.log(`----`)
  search(numbers, 0)
  search(numbers, 13)
  search(numbers, -5)
}

// 4. Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).
{
  const strings = ['sdsd', 'dfd', 'dfdfs', 'wewe', 'jkjk']
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5]
  const printElementReverse = (arrDirekt) => {
    const arr = arrDirekt.reverse()
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      console.log(element)
    }
  }

  printElementReverse(numbers)
  printElementReverse(strings)
}

// 5. Создайте массив чисел и число для поиска. Напишите код, который использует цикл do-while, чтобы проверить, есть ли заданное число в массиве. Если число найдено — выведите в консоль "Найдено", если нет — "Не найдено".
// см.3

// 6. Создайте массив строк. Напишите код, который использует цикл for, чтобы пройти по массиву в обратном порядке и вывести каждую строку в консоль.
// см.4

// 7. Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5, 13]
  const numbersMoreFive = []
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (element > 5) {
      numbersMoreFive.push(element)
    }
  }
  console.log(numbersMoreFive)
}

// 8. У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.
const students = [
  { name: 'Анна', grades: [85, 90, 92] },
  { name: 'Иван', grades: [88, 75, 96] },
  { name: 'Мария', grades: [78, 82, 94] },
]

const studentsAverage = {}

for (let j = 0; j < students.length; j++) {
  const student = students[j]
  let sumGrades = 0
  for (let i = 0; i < student.grades.length; i++) {
    const grade = student.grades[i]
    sumGrades += grade
  }
  const average = Math.round(sumGrades / student.grades.length)
  studentsAverage[student.name] = average
}
console.log(studentsAverage)

// Напишите функцию, которая переворачивает строку.
const str = 'qwerty'

const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseStr(str))

// Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5, 13]

  const sumArr = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      sum += element
    }
    return sum
  }

  console.log(sumArr(numbers))
}

// Напишите функцию, которая находит максимальный элемент в массиве чисел. ( тут можно схитрить и использовать метод Math.max)
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5, 13]

  const maxElement = (arr) => {
    return Math.max(...arr)
  }

  console.log(maxElement(numbers))
}

// Напишите функцию, которая удваивает каждый элемент в массиве чисел.
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5, 13]

  const doubleElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * 2
    }
    return arr
  }

  console.log(doubleElement(numbers))
}

// Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.
{
  const numbers = [12, 34, 34, 2, 1, 3, 0, -4, -5, 13]

  const includesElement = (arr, el) => {
    return arr.includes(el)
  }
  console.log(includesElement(numbers, 34))
  console.log(includesElement(numbers, -3))
}

// Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.
// Напишите функцию, которая вычисляет среднее значение чисел в массиве.

// Создайте массив объектов students, где каждый объект содержит свойства name и score. Напишите код, который с помощью цикла for проходит по массиву и:
// если score больше или равен 60 — выводит в консоль имя студента и сообщение "Сдал",
// если меньше 60 — имя и сообщение "Не сдал".
{
  const students = [
    { name: 'Анна', score: 58 },
    { name: 'Иван', score: 62 },
    { name: 'Мария', score: 60 },
    { name: 'Алексей', score: 55 },
    { name: 'Ольга', score: 64 },
    { name: 'Дмитрий', score: 59 },
    { name: 'Екатерина', score: 61 },
  ]
  for (let i = 0; i < students.length; i++) {
    const element = students[i]
    if (element.score >= 60) {
      console.log(element.name, 'pass')
    } else {
      console.log(element.name, "doesn't pass")
    }
  }
}

// 2. Создайте объект store, в котором есть массив products. Каждый продукт — объект с полями title, price и inStock. Используя цикл for, выведите в консоль названия всех товаров, которые есть в наличии (inStock === true) и стоят дешевле 100.


// 3. Создайте массив объектов users, где каждый объект содержит name и вложенный массив roles. Используя цикл for, проверьте:
// если у пользователя есть роль "admin" — выведите в консоль сообщение "Администратор: <имя>",
// если роли "admin" нет — "Пользователь: <имя>".

// 4. Создайте объект cart, в котором есть массив items. Каждый элемент массива — объект с полями name, price и quantity. С помощью цикла for посчитайте общую стоимость корзины и выведите итоговую сумму в консоль.
