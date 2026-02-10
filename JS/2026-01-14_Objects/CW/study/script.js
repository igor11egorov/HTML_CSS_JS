// Создайте объект с именем person, содержащий свойства name и age. Присвойте значения этим свойствам и выведите их в консоль.

const person = {
  name: 'Igor',
  age: 43,
}

console.log(person.name, person.age)
console.log('=====')

// У вас есть объект book с свойством title. Измените значение свойства title и выведите обновленное значение в консоль.

const book = {
  id: 1,
  title: 'Garry Potter',
}

book.title = 'Lord of the ring'

console.log(book.title)
console.log('=====')

// Создайте объект car с свойствами brand, model и year. Выведите в консоль информацию о машине в формате "Год выпуска [year] марки [brand], модель [model]".

const car = {
  brand: 'BMW',
  model: 'x5',
  year: 2014,
}

console.log(`Год выпуска ${car.year} марки ${car.brand}, модель ${car.model}`)
console.log('=====')

// Создайте объект dog с начальными свойствами name и age. Затем добавьте свойство breed и выведите обновленный объект в консоль.

const dog = {
  name: 'Bobik',
  age: 6,
}

dog.breed = 'Haski'

console.log(dog)
console.log('=====')

// У вас есть объект computer с различными свойствами. Удалите одно из свойств и выведите обновленный объект в консоль.

const computer = {
  model: 'Pentium',
  year: 1982,
  memory: 192,
  volume: 20,
}

delete computer.volume

console.log(computer)
console.log('=====')

// Создайте объект fruit с несколькими свойствами (например, name, color, taste). Используйте цикл for...in, чтобы вывести все свойства и их значения в консоль.

const fruit = {
  name: 'Apple',
  color: 'red',
  taste: 'sweet',
}

for (const key in fruit) {
  const element = fruit[key]
  console.log(key, element)
}

console.log('=====')

// Создайте объект user со свойствами name и isAdmin.
// Если isAdmin равно true, выведите в консоль "Доступ разрешён",
// иначе — "Доступ запрещён".

const user = {
  name: 'Igor',
  isAdmin: false,
}
console.log(user.isAdmin ? 'Доступ разрешён' : 'Доступ запрещён')
console.log('=====')

// Создайте объект student со свойствами name и grades, где grades — массив чисел.
// С помощью цикла выведите все оценки студента в консоль.

const student = {
  name: 'Igor',
  grades: [3, 4, 5, 4, 5, 5, 3, 2],
}

for (let i = 0; i < student.grades.length; i++) {
  const element = student.grades[i]
  console.log(element)
}
console.log('=====')

// Создайте переменные age и hasPassport.
// Если возраст больше или равен 18 И есть паспорт — выведите "Можно путешествовать".
// Если выполнено хотя бы одно из условий — выведите "Нужна проверка".
// Иначе — "Путешествие запрещено".

const tourist = {
  age: 24,
  hasPassport: false,
}

if (tourist.age >= 18 && tourist.hasPassport) {
  console.log('Можно путешествовать')
} else if (tourist.age >= 18 || tourist.hasPassport) {
  console.log('Нужна проверка')
} else {
  console.log('Путешествие запрещено')
}

console.log('=====')

// С помощью цикла for выведите в консоль числа от 1 до 10.
// Если число делится на 3 — выводите "Fizz",
// иначе выводите само число.

for (let i = 1; i <= 10; i++) {
  console.log(i % 3 === 0 ? 'Fizz' : i)
}

console.log('=====')

// Создайте объект student с основными свойствами, такими как name и age, а также вложенным объектом grades, представляющим оценки по предметам. Присвойте значения оценкам и выведите всю информацию в консоль.

{
  const student = {
    name: 'Igor',
    age: 23,
    grades: {
      math: 3,
      chemistry: 4,
      phusiks: 5,
      english: 2,
    },
  }

  let grades = student.grades
  for (let key in grades) {
    console.log(key, '=', grades[key])
  }

  console.log('=====')
}

// У вас есть объект car с вложенным объектом engine, содержащим свойства horsepower и fuelType. Измените значение horsepower и выведите обновленную информацию в консоль.

{
  const car = {
    engine: {
      horsepower: 192,
      fuelType: 'diesel',
    },
  }
  car.engine.horsepower = 186

  console.log(car)
  console.log('=====')
}

// Создайте объект playlist с вложенным объектом songs, представляющим список песен. Используйте цикл for...in, чтобы вывести названия всех песен и их продолжительность в консоль.

{
  const playlist = {
    songs: [
      {
        name: 'Chaidelier',
        author: 'Sia',
        dauer: 3.23,
      },
      {
        name: 'Flowers',
        author: 'Cyrus',
        dauer: 4.12,
      },
    ],
  }
  let songs = playlist.songs
  for (let i = 0; i < songs.length; i++) {
    let element = songs[i]
    for (const key in element) {
      if (key === 'author') {
        continue
      }
      console.log(element[key])
    }
  }

  console.log('=====')
}

// У вас есть объект book с основными свойствами, такими как title и author. Добавьте вложенный объект details, содержащий свойства pages и publicationYear. Выведите обновленную информацию в консоль.

{
  const book = {
    title: 'Garry Potter',
    author: 'Rowling',
  }

  book.details = {
    pages: 2340,
    publicationYear: 1994,
  }

  console.log(book)
  console.log('=====')
}

// Создайте объект user с свойствами name и вложенным объектом settings, содержащим свойство theme.
// Если тема равна "dark", выведите "Тёмная тема включена", иначе — "Светлая тема включена".

{
  const user = {
    name: 'Igor',
    settings: {
      theme: 'dark',
    },
  }

  console.log(
    user.settings.theme === 'dark'
      ? 'Тёмная тема включена'
      : 'Светлая тема включена'
  )
  console.log('=====')
}

// Создайте объект order с вложенным объектом status, содержащим свойство isPaid.
// Если заказ оплачен — выведите "Заказ оплачен", иначе — "Ожидает оплаты".

{
  const order = {
    status: {
      isPaid: false,
    },
  }

  console.log(order.status.isPaid ? 'Заказ оплачен' : 'Ожидает оплаты')
  console.log('=====')
}

// Создайте объект exam с вложенным объектом results, где хранятся оценки студентов.
// С помощью цикла for...in выведите имя студента и сообщение:
// "Сдал" — если оценка 60 и выше
// "Не сдал" — если меньше 60

{
  const exam = {
    results: {
      Igor: 33,
      Timofey: 100,
      Sergey: 80,
      Olga: 12,
    },
  }
  let results = exam.results
  for (const key in results) {
    console.log(results[key] >= 60 ? `${key} - сдал` : `${key} - не сдал`)
  }
  console.log('=====')
}

// Создайте объект device с вложенным объектом battery, содержащим свойство level.
// Если уровень батареи меньше 20 — выведите "Низкий заряд", иначе — "Заряд в норме".

{
  const device = {
    battery: {
      level: 45,
    },
  }
  console.log(device.battery.level < 20 ? 'Низкий заряд' : 'Заряд в норме')
  console.log('=====')
}
