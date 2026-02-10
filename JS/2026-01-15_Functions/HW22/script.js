// Задание 1
// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
console.log('--Task1--')

const sum = (a, b = 0) => a + b

console.log(sum(5, 6))
console.log(sum(6))

// Задача 2
// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.
console.log('--Task2--')

numbers = [1, 2, 3, 2, -4, -4, 3, 7]
const calculateSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    sum += element
  }
  return sum
}

console.log(calculateSum(numbers))

// Задача 3 *
// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.
console.log('--Task3--')

const students = [
  { name: 'Алексей', age: 18, course: 1 },
  { name: 'Мария', age: 19, course: 2 },
  { name: 'Дмитрий', age: 20, course: 3 },
  { name: 'Анна', age: 18, course: 1 },
  { name: 'Иван', age: 21, course: 4 },
  { name: 'Екатерина', age: 20, course: 3 },
  { name: 'Сергей', age: 22, course: 4 },
]

function displayStudentInfo(student) {
  let name = student.name
  let age = student.age
  let course = student.course
  console.log(`Name: ${name}, age: ${age}, course: ${course}`)
}

for (let i = 0; i < students.length; i++) {
  displayStudentInfo(students[i])
}
