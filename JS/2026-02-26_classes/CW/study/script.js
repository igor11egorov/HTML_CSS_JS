// //1. Объявление класса. Класс - это шаблон
// class Person {

//   //2. создаем функцию - конструктор. Это свойство объекта что находится в prototype функции конструктора
//   constructor(name) {
//     this.name = name
//   }

//   // 2.1 Создаем метод. Данный метод запишется в прототип сразу. В функции конструкторе вам придется записывать его вручную через метод prototype, в случае записи через this вы будете дублировать созданнный метод при создании каждого экземпляра класса
//   sayHi() {
//     console.log(`${this.name} says hi`)
//   }
// }

//3. создаем экземпляр класса через оператор new
// const sergii = new Person('Sergii')

// console.log(sergii);

// function User(name) {
//   this.name = name
// }

// User.prototype.sayHi = function() {
//   return `${this.name} says hi`
// }

// const newUser = new User('igor')
// console.log(newUser);

// class User {
//   constructor(username, age) {
//     this.username = username
//     this.age = age
//     this.user = []
//   }

//   login() {
//     console.log(`${this.username} logged in`)
//   }

//   logout() {
//     console.log(`${this.username} logged out`)
//   }
// }

// class OfflineUser extends User {
//     constructor(username, age, status){
//         super(username, age)
//         this.status = status
//     }
//     countUsers(){
//         console.log(`${this.countUsers.length} users`);
//     }
// }

// const u = new User('igor', 44)
// u.login()
// u.logout()
// const u2 = new User('katya', 35)
// u2.login()
// u2.logout()
// console.log(u);
// console.log(u2);
// const u3 = new OfflineUser('nadya', 38, 'offline')
// console.log(u3);

// Создать класс Person.
// Свойства:
// name
// age
// Методы:
// sayHello() — выводит строку: Hello, my name is ...
// showAge() — выводит возраст
// Создать 2 экземпляра.
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
    return this
  }
  showAge() {
    console.log(`My age is ${this.age}`)
    return this
  }
}

const p1 = new Person('igor', 44)
const p2 = new Person('andrew', 19)

p1.sayHello().showAge()
p2.sayHello().showAge()

// Создать класс Rectangle.
// Свойства:
// width
// height
// Методы:
// getArea() — возвращает площадь
// getPerimeter() — возвращает периметр
// Создать экземпляр и вывести результаты.
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
  getPerimeter() {
    return (this.width + this.height) * 2
  }
}

const r1 = new Rectangle(10, 5)
console.log(r1.getArea())
console.log(r1.getPerimeter())

// Создать класс Counter.
// Свойство:
// value (начинается с 0)
// Методы:
// increment() — увеличивает на 1
// decrement() — уменьшает на 1
// reset() — сбрасывает в 0
// Проверить работу.
class Counter {
  constructor(value) {
    this.value = value
  }
  increment() {
    this.value++
    console.log('++', this.value)
    return this
  }
  decrement() {
    this.value--
    console.log('--', this.value)
    return this
  }
  reset() {
    this.value = 0
    console.log('--0--', this.value)
    return this
  }
}

const c = new Counter(0)
let res = c.increment().increment().decrement().reset()
console.log(res.value)

// Создайте класс Transport, у которого есть метод move().
// Создайте два наследника класса Transport: Car и Bicycle.
// У каждого наследника должен быть свой метод move(), который переопределяет метод родительского класса.
// Создайте экземпляры классов Car и Bicycle и вызовите их методы move().
class Transport {
  move() {
    console.log(`я двигаюсь со скоростью`)
  }
}

class Car extends Transport {
  move() {
    // super.move()
    console.log(`и моя средняя скорость 50км/ч`)
  }
}
class Bicycle extends Transport {
  move() {
    // super.move()
    console.log(`и моя средняя скорость 10км/ч`)
  }
}

const mazda = new Car()
const merida = new Bicycle()

mazda.move()
merida.move()

// Создайте класс Person, который имеет свойство name.
// Используйте геттер и сеттер для доступа к свойству name.
// При попытке установить пустое имя сеттер должен вывести сообщение об ошибке.
// Создайте экземпляр класса, установите имя и выведите имя с помощью геттера.
{
  class Person {
    constructor(name) {
      this._name = name
    }

    getName() {
      console.log(this._name)
    }

    setName(name) {
      if (!name) {
        console.log('ERROR')
        return
      }
      this._name = name
    }
  }

  const p = new Person('igor')
  p.getName()
  p.setName('vasya')
  p.getName()
  p.setName('')
}

// Создайте класс Car, у которого есть приватное свойство mileage.
// Используйте геттер и сеттер для доступа к свойству mileage.
// При попытке установить отрицательное значение сеттер должен вывести сообщение об ошибке.
// Создайте экземпляр класса, установите пробег и выведите его с помощью геттера.
{
  class Car {
    constructor(mileage) {
      this._mileage = mileage
    }
    getMileage() {
      console.log(this._mileage)
    }
    setMileage(mileage) {
      if (mileage < 0) {
        console.log('ERROR')
      }
      this._mileage = mileage
    }
  }

  const bmw = new Car(120)
  bmw.getMileage()
  bmw.setMileage(-23)
  bmw.setMileage(125)
  bmw.getMileage()
}

// 1 Создайте базовый класс Animal, который имеет два свойства: name (имя животного) и type (тип животного). Затем создайте класс Dog, который наследуется от класса Animal. Класс Dog должен иметь дополнительное свойство breed (порода собаки). При создании экземпляра класса Dog, вызовите конструктор родительского класса Animal, передав в него имя и тип собаки. Используйте ключевое слово super для доступа к методам и свойствам родительского класса.
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

class Dog extends Animal {
  constructor(name, type, breed) {
    super(name, type)
    this.breed = breed
  }
}

const dog = new Dog('aaa', 'bbb', 'ccc')
console.log(dog)

//  1 Создайте базовый класс User, у которого есть свойства name и age. Добавьте метод displayInfo(), который выводит в консоль информацию о пользователе.
// Создайте наследника класса User под названием Admin, который будет представлять пользователя с административными правами. Добавьте в класс Admin дополнительное свойство role и метод displayRole(), который выводит в консоль роль администратора.
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  displayInfo() {
    console.log(`My name is ${this.name}, my age is ${this.age}`)
  }
}

class Admin extends User {
  constructor(name, age, role) {
    super(name, age)
    this.role = role
  }
  displayRole() {
    console.log(`My role is ${this.role}`)
  }
}

const admin = new Admin('igor', 44, 'admin')
admin.displayInfo()
admin.displayRole()

// Создайте базовый класс Account, представляющий банковский счет, у которого есть свойства id, balance и методы deposit() и withdraw(), для пополнения и снятия средств со счета соответственно.
// Создайте наследника класса Account под названием SavingsAccount, который представляет собой сберегательный счет. Добавьте в класс SavingsAccount дополнительное свойство interestRate, представляющее годовую процентную ставку, а также метод addInterest(), который добавляет на счет проценты по прошествии определенного времени.
class Account {
  constructor(id, balance) {
    this.id = id
    this.balance = balance
  }
  deposit(amount) {
    if (amount < 0) {
      console.error('error')
    } else {
      this.balance += amount
    }
  }
  withdraw(amount) {
    if (amount < 0 || amount > this.balance) {
      console.error('error')
    } else {
      this.balance -= amount
    }
  }
}
class savingsAccount extends Account {
  constructor(id, balance, interestRate) {
    super(id, balance)
    this.interestRate = interestRate
  }
  addInterest(years) {
    if (years <= 0) {
      console.error('error')
    } else {
      this.balance += this.balance * this.interestRate * years
    }
  }
}
const savingsAccount1 = new savingsAccount('id12', 242974, 0.05)
console.log(savingsAccount1)
savingsAccount1.addInterest(4)
console.log(savingsAccount1)
savingsAccount1.deposit(-3985)
console.log(savingsAccount1)
savingsAccount1.deposit(3985)
console.log(savingsAccount1)
savingsAccount1.withdraw(300000)
console.log(savingsAccount1)
savingsAccount1.withdraw(30000)
console.log(savingsAccount1)

// Создайте базовый класс Library, у которого есть свойство books, представляющее массив объектов книг. Добавьте методы addBook() для добавления книги в библиотеку и removeBook() для удаления книги по названию. Создайте наследника класса Library под названием DigitalLibrary, который представляет собой цифровую библиотеку с дополнительными методами searchByAuthor() и searchByTitle() для поиска книг по автору и названию соответственно.
class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
}

class Library {
  books = [] // указано для удосбства понимания
  constructor(books) {
    this.books = books
  }
  addBook(book) {
    if (book && book instanceof Book) {
      this.books.push(book)
    } else {
      console.log('ERROR')
    }
  }
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }
}

class DigitalLibrary extends Library {
  constructor(books) {
    super(books)
  }
  searchByAuthor(author) {
    return this.books.filter((book) => book.author === author)
  }
  searchByTitle(title) {
    return this.books.filter((book) => book.title === title)
  }
}

const book1 = new Book('1', '11', 1111)
const book2 = new Book('2', '21', 2222)
const book3 = new Book('3', '31', 3333)
const book4 = new Book('4', '41', 4444)

const dl = new DigitalLibrary([book1, book2, book3, book4])

const searchByAuthor = dl.searchByAuthor('31')
console.log('searchByAuthor', searchByAuthor) // Book3
const searchByTitle = dl.searchByTitle('2')
console.log('searchByTitle', searchByTitle) // Book2
dl.removeBook('1')
console.log("dl_removeBook1", dl) // [book2, book3, book4] без book1
const book5 = { // пример объекта, который не является экземпляром класса Book, чтобы вывести ошибку при проверке условия "book instanceof Book"
  title: 'title',
  author: 'author',
  year: 'year',
}
dl.addBook(book5) // ERROR
dl.addBook(book1)
console.log("dl_addBook1", dl) // [book2, book3, book4, book1]. Добавлен book1
