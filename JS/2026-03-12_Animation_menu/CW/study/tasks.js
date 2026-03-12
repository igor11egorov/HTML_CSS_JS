// API:
// https://jsonplaceholder.typicode.com
// Задача 1. Получить и отфильтровать посты
// Условие
// Написать функцию getLongPosts, которая:
// Загружает посты.
// Оставляет только посты, у которых длина body больше 150 символов.
// Возвращает массив объектов:
// [
//   {
//     id: 1,
//     title: "post title"
//   }
let posts = []

async function fetchPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    posts = data
  } catch (error) {
    console.error('--Server error--', error)
  }
}

async function getLongPosts() {
  await fetchPosts()
  const filteredPosts = posts
    .filter((post) => post.body.length > 150)
    .map(({ id, title }) => ({ id, title }))
  console.log(filteredPosts)
}
getLongPosts()

//   Задача 2. Найти все посты пользователя
// Условие
// Создать функцию:
// getUserPosts(userId)
// Функция должна:
// Получить все посты.
// Найти посты пользователя по userId.
// Вернуть массив только заголовков.
// Пример результата
// [
//   "title one",
//   "title two",
//   "title three"
// ]
async function getUserPosts(userId) {
  await fetchPosts()
  const filteredPosts = posts
    .filter((post) => post.userId === userId)
    .map((post) => post.title)
  console.log(filteredPosts)
}
getUserPosts(3)

// Посчитать количество постов каждого пользователя
// Условие
// Получить посты и сформировать объект:
// {
//   1: 10,
//   2: 10,
//   3: 10
// }
// Где:
// ключ — userId
// значение — количество постов
// Требования
// Использовать:
// reduce


