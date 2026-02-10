//Promise.resolve()
// const p1 = new Promise((res, rej) => {
//   if(false) {
//     res('success')
//   } else {
//     rej('error')
//   }
// })
// const promiseResolve = Promise.resolve('this is pure resolve')
// const promiseReject = Promise.reject('this is pure reject promise')
// promiseResolve.then((result) => console.log(result))
// promiseReject.catch((error) => console.log(error))

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res('success')
//     } else {
//     }
//   }, 2000)
// })

// const p2 = Promise.resolve('resolved promise')
// const p3 = Promise.resolve('resolved promise 2')
// const p4 = Promise.reject('rejected promise 2')

//Promise.all([]) - дожидается пока выполнятся все промиссы переданные в массив аргумента. Пока не выполнятся все - состояние pending. Если хоть один зафейлится - ошибка, ни один не выполнится
// Promise.all([p1, p2, p3, p4])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Создайте три функции fetchData1, fetchData2 и fetchData3, каждая из которых возвращает Promise с имитацией загрузки данных с сервера, все три функции должны резолвиться через определенное кол-во времени: 2000 1500 и 1000 миллисекунд. Используя Promise.all(), создайте функцию loadAllData, которая одновременно загружает данные из всех трех ресурсов и возвращает массив с результатами.

const fetchData = (time, messageRes, messageRej) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      true ? res(messageRes) : rej(messageRej)
    }, time)
  })

const loadAllData = () =>
  Promise.all([
    fetchData(2000, 'res1', 'err1'),
    fetchData(3000, 'res2', 'err2'),
    fetchData(1500, 'res3', 'err3'),
  ])

loadAllData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

//   Получить все результаты
// Есть функции, каждая возвращает Promise:
// Задача:
// Используя Promise.all, получить все результаты и вывести их в консоль.
const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)

const loadAllPromises = (arr) => Promise.all(arr)

loadAllPromises([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

// Сумма результатов
// Задача:
// Через Promise.all получить значения и вычислить их сумму.
const p4 = Promise.resolve(5)
const p5 = Promise.resolve(15)
const p6 = Promise.resolve(25)

loadAllPromises([p4, p5, p6]).then((res) =>
  console.log(res.reduce((acc, result) => (acc += result), 0)),
)

// Если один упал
// Задача:
// Вызвать Promise.all и обработать ошибку через catch.
const p7 = Promise.resolve('OK')
const p8 = Promise.reject('ERROR')
const p9 = Promise.resolve('DONE')

loadAllPromises([p7, p8, p9])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

// const response = fetch('https://jsonplaceholder.typicode.com/posts')
// //fetch - возвращает промис
// //возвращает response, который надо перевести в читабельный вид. Для перевода использует json()
// response
// .then((res) => res.json())
// //в ответ на res.json() я получаю снова промис, который надо обработать ->
// .then((data) => console.log(data))
// // console.log(response);

// function fetchResource(url) {
//   return fetch(url)
// }

// fetchResource('https://jsonplaceholder.typicode.com/')
// .then

// Отправить запрос и получить ответы на каждый из url указанных в jsonplaceholder
// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts
// Ищем вкладку resources, там отправляем запрос на каждый из роутов

const mainUrl = 'https://jsonplaceholder.typicode.com/'
const posts = 'posts'
const comments = 'comments'
const albums = 'albums'
const photos = 'photos'
const todos = 'todos'
const users = 'users'

function fetchResource(url) {
  return fetch(mainUrl + url).then((res) => res.json())
}

fetchResource(posts).then((data) => console.log(posts, data))
fetchResource(comments).then((data) => console.log(comments, data))
fetchResource(albums).then((data) => console.log(albums, data))
fetchResource(photos).then((data) => console.log(photos, data))
fetchResource(todos).then((data) => console.log(todos, data))
fetchResource(users).then((data) => console.log(users, data))

// Задача 1 — только опубликованные посты
// Дано
// Запросы:
// /posts
// Что нужно
// После получения массива написать логику, которая:
// оставляет только посты с userId === 1
// возвращает массив заголовков этих постов
// Использовать:
// filter → map
fetchResource(posts).then((posts) => {
  const filteredPosts = posts
    .filter((post) => post.userId === 1)
    .map((post) => post.title)
  console.log('--1--', filteredPosts)
})

//  Задача 2 — email пользователей
// Дано
// /users
// Что нужно
// Вернуть массив строк вида:
// "Leanne Graham (Sincere@april.biz)"
// Использовать:
// map
fetchResource(users).then((users) => {
  const emailsUsers = users.map((user) => `${user.name} (${user.email})`)
  console.log('--2--', emailsUsers)
})

//  Задача 3 — дорогие задачи (todos)
// Дано
// /todos
// Что нужно
// оставить только выполненные (completed === true)
// взять первые 10
// вернуть массив их title
// Использовать:
// filter → slice → map
fetchResource(todos).then((todos) => {
  const filteredTodos = todos
    .filter((todo) => todo.completed)
    .slice(0, 10)
    .map((todo) => todo.title)
  console.log('--3--', filteredTodos)
})

// Задача 4 — комментарии конкретного поста
// Дано
// /comments
// Что нужно
// найти комментарии где postId === 5
// вернуть массив email авторов
fetchResource(comments).then((comments) => {
  const filteredEmails = comments
    .filter((comment) => comment.postId === 5)
    .map((comment) => comment.email)
  console.log('--4--', filteredEmails)
})

// Задача 5 — статистика постов
// Дано
// /posts
// Что нужно
// Посчитать, сколько постов у каждого пользователя.
// Результат:
// {
//   1: 10,
//   2: 10,
//   3: 10
// }
// Использовать:
// reduce
fetchResource(posts).then((posts) => {
  const countPosts = posts.reduce((acc, {userId}) => {
    if (acc[userId] === undefined) {
      acc[userId] = 1
    } else {
      acc[userId] += 1
    }
    return acc
  }, {})
  console.log('--6--', countPosts)
})
