// Задание 1
// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

const man = { name: 'Igor', age: 43 }

console.log(`Человек с именем ${man.name} и возрастом ${man.age}`)
console.log('=====')

// Задание 2
// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

const books = [
  { name: 'Garry Potter', author: 'Rowling' },
  { name: 'War and Peace', author: 'Tolstoy' },
]

for (let i = 0; i < books.length; i++) {
  const element = books[i]
  for (const key in element) {
    console.log(element[key])
  }
  console.log('----')
}
console.log('=====')

// Задание 3 *
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.

const rectangle = { a: 10, b: 35 }

let a = rectangle.a
let b = rectangle.b

rectangle.s = a * b
rectangle.p = (a + b) * 2

console.log(rectangle)
console.log('=====')

// Задание 4 *
// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

const fruits = [
  { name: 'Яблоко', color: 'красный' },
  { name: 'Клубника', color: 'красный' },
  { name: 'Вишня', color: 'красный' },
  { name: 'Гранат', color: 'красный' },
  { name: 'Банан', color: 'желтый' },
  { name: 'Киви', color: 'зеленый' },
  { name: 'Апельсин', color: 'оранжевый' },
]

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i]
  if (element.color === 'красный') {
    console.log(element.name)
  }
}
console.log('=====')

// Задание 5 **
// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

const playlist = {
  name: 'Мой плейлист',
  songs: [
    { title: 'Imagine', artist: 'John Lennon', duration: 183 },
    { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
    { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 },
    { title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 301 },
    { title: 'Blinding Lights', artist: 'The Weeknd', duration: 200 },
    { title: 'Hotel California', artist: 'Eagles', duration: 391 },
  ],
}

const songs = playlist.songs
for (let i = 0; i < songs.length; i++) {
  const item = songs[i]
  console.log(
    `Название:${item.title}, автор:${item.artist}, длительность:${item.duration}`
  )
}

console.log('=====')
