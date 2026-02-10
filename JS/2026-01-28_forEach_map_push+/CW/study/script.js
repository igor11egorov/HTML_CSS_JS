// Создайте пустой массив colors. Используйте метод push, чтобы добавить в него три цвета: "red", "green", "blue". (Попробовать решить с помощью цикла)
const colors = []
colors.push('red', 'green', 'blue')
console.log(colors)

// Создайте массив numbers с элементами 1 и 2. Используйте метод push, чтобы добавить в него два новых числа: 3 и 4.
{
  const numbers = [1, 2]
  numbers.push(3, 4)
  console.log(numbers)
}

// Используя метод forEach(), выведите в консоль сумму всех элементов числового массива.
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]
let sum = 0
numbers.forEach((number) => {
  sum += number
})
console.log(sum)

// Используя метод forEach(), умножьте каждый элемент числового массива на его индекс
let changedNumbers = []
numbers.forEach((number, index) => {
  number *= index
  changedNumbers.push(number)
})
console.log(changedNumbers)

// Используя метод map(), создайте новый массив, содержащий длины каждого элемента исходного массива.
const strings = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'kiwi',
  'lemon',
]

const changedStrings = strings.map((string) => string.length)
console.log(changedStrings)

// Используя метод map(), создайте новый массив чисел, где каждое число больше 10 - возвести в квадрат, а число меньше 10 в куб
{
  const numbers = [2, 4, 5, 12, 10, 5, 14, 2, 7, 1, 0]
  const changedNumbers = numbers.map((number) => {
    return number >= 10 ? number ** 2 : number ** 3
  })
  console.log(changedNumbers)
}
// Создайте массив чисел. Используя метод forEach и условие, выведите в консоль только четные числа из массива.
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number)
    }
  })
}

// Создайте массив чисел. Напишите функцию, используя метод map, чтобы создать новый массив, содержащий удвоенные значения каждого элемента из первого массива.
{
  const numbers = [1, 2, 3, 4, 5]

  const doubleNumber = (arr) => {
    const doubleArr = arr.map((item) => item * 2)
    return doubleArr
  }

  console.log(doubleNumber(numbers))
}

// Создайте массив объектов с полями "name". Используйте метод map, чтобы создать новый массив, содержащий только имена из первого массива.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
]

const names = people.map((man) => man.name)
console.log(names)
