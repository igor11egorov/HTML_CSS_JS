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

// Пользователи и их посты
// Условие
// Нужно получить список пользователей и список постов, а затем собрать новый массив объектов такого формата:
// [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     email: "Sincere@april.biz",
//     postCount: 10,
//     titles: ["title 1", "title 2", "title 3"]
//   }
// ]
// Требования
// Создать функцию getUsers(), которая получает пользователей.
// Создать функцию getPosts(), которая получает посты.
// Создать функцию buildUsersReport(users, posts), которая:
// для каждого пользователя находит его посты,
// считает количество постов,
// берет только первые 3 заголовка постов.
// Отсортировать результат по postCount по убыванию.
// Вывести итоговый массив в консоль.
// const posts = await fetch(
// "https://jsonplaceholder.typicode.com/posts?userId=1"
// ).then(res => res.json())
async function getPosts() {
  return asyncRequest('https://jsonplaceholder.typicode.com/posts', 'GET')
}

async function getUsers() {
  return asyncRequest('https://jsonplaceholder.typicode.com/users', 'GET')
}

async function asyncRequest(url, method, data) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }
  if (data && method !== 'GET') {
    options.body = JSON.stringify(data)
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`)
  }
  return await res.json()
}

function buildUsersReport(users, posts) {
  const report = users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id)
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      postCount: userPosts.length,
      titles: userPosts.slice(0, 3).map((post) => post.title),
    }
  })
  return report.sort((a, b) => b.postCount - a.postCount)
}

async function main() {
  const posts = await getPosts()
  const users = await getUsers()
  const report = buildUsersReport(users, posts)
  console.log(report)
}

main()

// Найти активных авторов по комментариям
// Условие
// Нужно определить, у каких пользователей суммарно больше всего комментариев под их постами.
// Что нужно сделать
// Получить:
// пользователей
// посты
// комментарии
// Для каждого пользователя посчитать:
// сколько у него постов,
// сколько всего комментариев под всеми его постами.
// Сформировать массив:
// [
//   {
//     userId: 1,
//     name: "Leanne Graham",
//     postsCount: 10,
//     commentsCount: 53
//   }
// ]
// Оставить только тех пользователей, у которых commentsCount > 30.
// Отсортировать по убыванию commentsCount.
async function getComments() {
  return asyncRequest('https://jsonplaceholder.typicode.com/comments', 'GET')
}

function findActiveAuthors(users, posts, comments) {
  const report = users.map((user) => {
    const usersPost = posts.filter((post) => post.userId === user.id)
    const postsIds = usersPost.map((post) => post.id)
    const commentsCount = comments.filter((comment) =>
      postsIds.includes(comment.postId),
    ).length
    return {
      userId: user.id,
      name: user.name,
      postsCount: usersPost.length,
      commentsCount: commentsCount,
    }
  })
  return report
    .filter((user) => user.commentsCount > 30)
    .sort((a, b) => b.commentsCount - a.commentsCount)
}

async function load() {
  const posts = await getPosts()
  const users = await getUsers()
  const comments = await getComments()
  const report = findActiveAuthors(users, posts, comments)
  console.log(report)
}

load()

// Поиск пользователя по части имени
// Условие
// Написать программу, которая ищет пользователей по части имени и показывает краткую информацию о них вместе с количеством альбомов.
// Что нужно сделать
// Создать функцию searchUsers(query).
// Получить пользователей и альбомы.
// Найти всех пользователей, у которых name содержит введенную строку.
// Вернуть массив объектов такого вида:
// [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     albumsCount: 10
//   }
// ]
// Пример
// searchUsers("Le")
// Условия
// поиск должен быть без учета регистра
// если никто не найден, вернуть пустой массив
// для загрузки данных использовать async/await
async function getAlbums() {
  return asyncRequest('https://jsonplaceholder.typicode.com/albums', 'GET')
}

function searchUsers(users, query) {
  return (
    users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    ) || []
  )
}

function buildReport(users, albums) {
  if (users.length === 0) return []
  const report = users.map((user) => {
    const userAlbums = albums.filter((album) => album.userId === user.id)
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      albumsCount: userAlbums.length,
    }
  })
  return report
}

async function orchestrator() {
  const query = 'le'
  const users = await getUsers()
  const albums = await getAlbums()
  const foundUsers = searchUsers(users, query)
  const report = buildReport(foundUsers, albums)
  console.log(report)
}

orchestrator()
