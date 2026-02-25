// Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.
const person = {
  name: 'Igor',
  age: 44,
  myAge() {
    console.log(`Возраст ${this.name} - ${this.age}`)
  },
}

person.myAge()

// Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.
const calculator = {
  add(a, b) {
    this.result = a + b
    console.log(this.result)
  },
  multiply(a, b) {
    this.result = a * b
    console.log(this.result)
  },
  result: 0,
}

calculator.add(1, 2)
calculator.multiply(2, 3)
console.log(calculator)

// Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.
const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
  if (this.style.background === 'red') this.style.background = 'blue'
  else this.style.background = 'red'
})

// Задача 1
// Создать объект product со свойствами:
// title
// price
// Добавить методы:
// getPrice() — выводит цену, используя this
// setDiscount(percent) — уменьшает цену на процент, изменяя свойство объекта через this
const product = {
  title: 'Iphone',
  price: 1500,
  getPrice() {
    console.log(this.price)
  },
  setDiscount(percent) {
    this.price = this.price * (1 - percent / 100)
  },
}

product.getPrice()
product.setDiscount(20)
product.getPrice()

// Задача 2
// Создать объект timer со свойствами:
// seconds (начинается с 0)
// Добавить методы:
// start() — каждую секунду увеличивает seconds на 1 (использовать this)
// stop() — останавливает таймер
// show() — выводит текущее значение seconds
// Цель — корректно работать с this внутри setInterval.
// let count = 0
// const timer = setInterval(() => {
//     count++
//     console.log(count);
//     if(count === 5) {
//         clearInterval(timer)
//     }
// }, 1000)
const timer = {
  seconds: 0,
  start(end) {
    const intervalId = setInterval(() => {
      this.seconds++
      this.show()
      if (this.seconds === end) {
        clearInterval(intervalId)
      }
    }, 1000)
  },
  stop() {
    clearInterval(this.intervalId)
  },
  show() {
    console.log(this.seconds)
  },
}

timer.start(5)
timer.stop()

// ----- Theory ------

// function FreshConstructor(title, description) {
//   this.title = title;
//   this.description = description;
// }

// FreshConstructor.prototype.nameAuthor = function(name) {
//   return name
// };

// class User {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }

//     sayHi() {
//         return ``
//     }
// }
// const postAboutNature = new FreshConstructor(
//   "About trees",
//   "This is about trees",
// );

// const postAboutAnimals = new FreshConstructor(
//   "About cats",
//   "This is about cats",
// );

// console.log(postAboutNature);
// console.log(postAboutAnimals.author);

// console.log(postAboutAnimals);

// const arr = [1, 2, 3, 4];

// Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.
function Car(brand, model, year) {
  this.brand = brand
  this.model = model
  this.year = year
  this.print = function () {
    console.log(`${this.brand}, ${this.model}, ${this.year}`)
  }
}

const mazda = new Car('Mazda', 'cx5', '2007')
mazda.print()

// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().
const resultObj = {
  value: 9,
}

function sum(a, b) {
  this.result = a + b
}
sum.call(resultObj, 4, 5)
console.log(resultObj.result)

// Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().
function division(a, b) {
  this.result = a / b
}

division.apply(resultObj, [6, 2])
console.log(resultObj.result)

// Написать функцию counter, которая будет прибавлять 1 к текущему значению.
function counter() {
  this.value++
}

counter.call(resultObj)
console.log(resultObj.value)