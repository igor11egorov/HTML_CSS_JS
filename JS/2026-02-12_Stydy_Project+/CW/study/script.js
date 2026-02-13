// Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Выведите список пользователей в консоль.

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => console.log(data))

// Используя fetch для выполнения POST запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Создайте объект пользователя с полями name, username, и email.
// Отправьте POST запрос с созданным объектом пользователя.
// Выведите ответ сервера в консоль.

const newObj = {
  name: 'Igor',
  username: 'Gierya',
  email: 'igor@igor.de',
}

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(newObj),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
  .then((res) => res.json())
  .then((data) => console.log(data))

// Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/posts).
// Необходимо функцию рендера постов. Отобразить все посты.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => renderPosts(data))

function renderPosts(data) {
  const listPosts = document.querySelector('#list-posts')

  // const listItems = data
  //   .map((item, index) => `<p><b>${index+1}:</b> ${item.body}</p>`)
  //   .join('')
  // listPosts.insertAdjacentHTML(
  //   'afterend',
  //     `
  //         ${listItems}
  //     `,
  // )

  data.forEach((item, index) =>
    listPosts.insertAdjacentHTML(
      'beforeend',
      `
            <p><b>${index + 1}:</b> ${item.body}</p>
        `,
    ),
  )
}

// Создать форму с полями Имя, Логин, Email, которая будет отправлять запрос на создание пользователя. Используем POST метод.
// Url 4 задачи - users

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // const name = e.target[0].value
  // const login = e.target[1].value
  // const email = e.target[2].value
  const name = document.querySelector('#name').value
  const login = document.querySelector('#login').value
  const email = document.querySelector('#email').value
  fetchJSON(name, login, email).then((data) => console.log(data))
  form.reset()
})

function fetchJSON(name, login, email) {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({ name, login, email }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
}
