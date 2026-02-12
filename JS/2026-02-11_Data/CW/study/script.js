const newObj = {
  userId: 10,
  title: 'Hello',
  body: 'Hello, world!',
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newObj),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
  .then((res) => res.json())
  .then((data) => console.log(data))

// Создайте функции под каждый запрос, отправьте на url, выведите в консоль что получилось
// /posts/1/comments
// /albums/1/photos
// /users/1/albums
// /users/1/todos
// /users/1/posts
// https://jsonplaceholder.typicode.com/
const mainUrl = 'https://jsonplaceholder.typicode.com/'

requests = [
  'posts/1/comments',
  'albums/1/photos',
  'users/1/albums',
  'users/1/todos',
  'users/1/posts',
]

async function fetchResource(url) {
  return fetch(mainUrl + url).then((res) => res.json())
}

requests.forEach((request) => {
  fetchResource(request).then((data) => {
    const title = document.querySelector('#title')
    const listItems = data
      .map((item) => `<p>${JSON.stringify(item)}</p>`)
      .join('')

    title.insertAdjacentHTML(
      'afterend',
      `
        <div class="task">
            <h3>${request}</h3>
            ${listItems}
        </div>
    `,
    )
  })
})

// requests.forEach((request) => {
//   fetchResource(request).then((data) => console.log(JSON.stringify(data)))
// })

// Доп задача для тех кто сделал:
// Подтянуть todos только те элементы где completed: false, если completed = true, вывести внизу в формате:
// Выполненная задача: title
fetchResource('todos').then((data) => {
  const title = document.querySelector('#title')
  const completedTasks = data
    .filter((item) => item.completed)
    .map((item) => item.title)
  const uncompletedTasks = data
    .filter((item) => !item.completed)
    .map((item) => item.title)

  title.insertAdjacentHTML(
    'afterend',
    `
    <div class="task">
        <h3>Не выполненные:</h3>
        <div id="uncompletedTasks"></div> 
        
        <h3>Выполненные:</h3>
        <div id="completedTasks"></div>   
    </div>
    `,
  )

  const elUncompletedTasks = document.querySelector('#uncompletedTasks')
  const elCompletedTasks = document.querySelector('#completedTasks')

  uncompletedTasks.forEach((task, index) =>
    elUncompletedTasks.insertAdjacentHTML(
      'beforeend',
      `<p>${index + 1} ${task}</p>`,
    ),
  )

  completedTasks.forEach((task, index) =>
    elCompletedTasks.insertAdjacentHTML(
      'beforeend',
      `<p>${index + 1} ${task}</p>`,
    ),
  )
})

// Задача (DOM + методы массивов) на основе https://kanye.rest/
// Цель: получать цитаты Канье, сохранять их в массив, выводить в DOM, и обрабатывать массив методами.

// Условие
// Сделай кнопку “Get quote”.
// По клику отправляй запрос на https://kanye.rest/ и получай объект вида:

// { quote: "..." }
// Сохраняй каждую полученную цитату в массив quotes (строки). По хорошему - в локальное хранилище класть

// Отрисовка в DOM
// На странице должны быть 3 блока:
// 1) Список последних цитат
// Выводи все цитаты списком (<ul><li>...</li></ul>)
// 2) Дубликаты внизу
// Если цитата уже была (повторилась), не добавляй её в основной список
// Вместо этого выводи её внизу в формате:

// Повтор: "цитата"
// 3) Статистика
// Обновляется после каждого запроса:
// Всего получено: X
// Уникальных: Y
// Повторов: Z
// Самая длинная цитата: "..."
// Средняя длина цитаты: N (округлить)

// Ограничения (чтобы было “интересно”)
// Нельзя использовать for / while
// Только методы массивов: map, filter, reduce, some, find, includes
// Для DOM: createElement, append, textContent

// Для тех кто сделал
// Добавь кнопку “Clear”, которая:
// очищает массив quotes
// очищает DOM списки и статистику
// https://www.figma.com/design/1j2hMJjl0iwAUyWde1FWB8/Base?node-id=10335-123&p=f&t=SZEWjjG7zJRbr4sk-0

// При каждом клике:
// отправляется запрос
// приходит цитата
// она добавляется в историю
// обновляется UI
