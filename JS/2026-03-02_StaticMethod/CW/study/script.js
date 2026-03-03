// const res = Array.from([1, 2, 3, 4, 5], (item) => item * 2)
// console.log(res);

const obj = {
  title: 'hello',
  description: 'world',
}

const resKeys = Object.keys(obj)
console.log(resKeys)

const resValues = Object.values(obj)
console.log(resValues)

const resEntries = Object.entries(obj).map(([key, value]) => {
  return {
    [key]: value,
  }
})
console.log(resEntries)

class Person {
  constructor(username, lastName) {
    this.username = username
    this.lastName = lastName
  }

  static sayHi(person) {
    console.log(`${person.username} says hi!`)
  }
}

const u1 = new Person('Sergii', 'Maksymenko')
console.log(u1)

Person.sayHi(u1)

// Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.
class Calculator {
  static add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
  }
}
Calculator.add(3, 4)
Calculator.add(4, -5)

// Создайте класс RandomNumberGenerator, у которого будет статический метод generate(), который будет генерировать случайное число в заданном диапазоне.
class RandomNumberGenerator {
  static generate(min, max) {
    console.log(Math.round(Math.random() * (max - min) + min))
  }
}
RandomNumberGenerator.generate(23, 37)
RandomNumberGenerator.generate(55, 327)

// Создайте класс StringUtils, у которого будет статический метод reverse(), который будет принимать строку и возвращать ее в обратном порядке.
class StringUtils {
  static reverse(str) {
    console.log(str.split('').reverse().join(''))
  }
}
StringUtils.reverse('hello')
StringUtils.reverse('world')

// Создайте класс MathUtils (Математический утилитар), у которого будет статический метод getMax(), который будет принимать массив чисел и возвращать наибольшее число.
class MathUtils {
  static getMax(arr) {
    console.log(Math.max(...arr))
  }
}
MathUtils.getMax([2, 3, 4, 5])
MathUtils.getMax([5, 3, 2, 1])

// Дан объект:
const users = {
  Yury: { age: 28, active: true },
  Anna: { age: 17, active: false },
  Mike: { age: 32, active: true },
  Kate: { age: 15, active: true },
}
// Требуется:
// Оставить только пользователей старше 18 лет.
// Вернуть массив объектов вида:
// [
//   { Yury: { age: 28, active: true } },
//   { Mike: { age: 32, active: true } }
// ]
// Использовать Object.entries, filter и map.
const filteredUsers = Object.entries(users)
  .filter(([name, data]) => data.age > 18)
  .map(([name, data]) => ({ [name]: data }))

console.log(filteredUsers)

// Создайте класс Counter, у которого будет статическое свойство count, которое будет хранить текущее значение счетчика.
// Создайте статический метод increment(), который будет увеличивать значение счетчика на 1.
// Создайте статический метод decrement(), который будет уменьшать значение счетчика на 1.
class Counter {
  static count = 0
  static increment() {
    this.count++
  }
  static decrement() {
    this.count--
  }
  static showCount() {
    console.log(this.count)
  }
}

Counter.showCount()
Counter.increment()
Counter.increment()
Counter.increment()
Counter.showCount()
Counter.decrement()
Counter.showCount()

// Создайте класс Student, представляющий студента.
// Требования:
// Конструктор принимает объект с полями:
// name — имя студента
// scores — массив чисел (оценки)
// Экземпляр должен иметь метод:
// getAverage() — возвращает средний балл студента.
// Добавьте статические методы:static fromObject(obj)Принимает объект вида:{
//  Yury: [90, 85, 88],
//   Anna: [100, 95, 98],
//   Mike: [70, 60, 75]
// }
// И возвращает массив экземпляров Student.Обязательно использовать:
// Object.entries
// Array.from
// static getTopStudents(students, minAverage)Принимает:
// массив студентов
// минимальный средний балл
// Возвращает массив студентов, у которых средний балл >= minAverage.Использовать filter.
// static getGroupAverage(students)Принимает массив студентов и возвращает средний балл по группе.Использовать reduce.
// static sortByAverage(students)Возвращает новый массив студентов, отсортированный по убыванию среднего балла.Использовать map + sort.
// Дополнительно:
// Запрещено изменять исходные массивы.
// Все вычисления должны происходить через методы массива (map, filter, reduce, Array.from).
class Student {
  constructor(name, scores) {
    this.name = name
    this.scores = scores
  }
  getAverage() {
    return (
      this.scores.reduce((acc, score) => (acc += score), 0) / this.scores.length
    )
  }
  static fromObject(obj) {
    return Object.entries(obj).map(
      ([name, scores]) => new Student(name, scores),
    )
  }
  static getTopStudents(students, minAverage) {
    return students.filter((student) => student.getAverage() >= minAverage)
  }
  static getGroupAverage(students) {
    return (
      students.reduce((acc, student) => (acc += student.getAverage()), 0) /
      students.length
    )
  }
  static sortByAverage(students) {
    return students.sort((a, b) => b.getAverage() - a.getAverage())
  }
}

const student1 = new Student('Igor', [90, 85, 78])
const student2 = new Student('Anna', [88, 92, 79])
const student3 = new Student('Mike', [75, 80, 70])
const student4 = new Student('Kate', [95, 90, 93])
const student5 = new Student('Yury', [82, 77, 85])
const student6 = new Student('Olga', [91, 89, 84])

const students = [student1, student2, student3, student4, student5, student6]

console.log(student1.getAverage(), student1)
console.log(student2.getAverage(), student2)
console.log(student3.getAverage(), student3)
console.log(student4.getAverage(), student4)
console.log(student5.getAverage(), student5)
console.log(student6.getAverage(), student6)

const obj1 = {
  Yury: [90, 85, 88],
  Anna: [100, 95, 98],
  Mike: [70, 60, 75],
}

console.log(Student.fromObject(obj1))

console.log(Student.getTopStudents(students, 80))
console.log(Student.getGroupAverage(students))
console.log(Student.sortByAverage(students))
