// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// Используйте цикл для вызова метода draw() для каждого элемента массива.

class Shape {
  constructor(number) {
    this.number = number
  }
  draw() {
    console.log(`рисую ${this.number}`)
  }
}

class Rectangle extends Shape {
  constructor(number) {
    super()
    this.number = number
  }
  draw() {
    console.log(`рисую прямоугольник ${this.number}`)
  }
}

class Circle extends Shape {
  constructor(number) {
    super()
    this.number = number
  }
  draw() {
    console.log(`рисую круг ${this.number}`)
  }
}

const c1 = new Circle(1)
const c2 = new Circle(2)
const c3 = new Circle(3)
const r1 = new Rectangle(1)
const r2 = new Rectangle(2)
const r3 = new Rectangle(3)

const arrShape = [c3, r2, r1, c1, r3, c2]

arrShape.forEach((shape) => shape.draw())
