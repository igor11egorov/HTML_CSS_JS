// 1. Для работы с async/await необходимо перед ключевым словом function или, в случае со стрелочной функцией, ставим async перед параметром
// async function fetchTodos() {
//   try {
//    const res = await fetch('https://jsonplaceholder.typicode.com/todos32')
//    console.log(res);
//    //Данная проверка необходима в случае, когда адрес верный, однако, категория или слаг не существуют. Объект response вернется, однако, ok будет false
//    if(!res.ok) {
//     //Создаем новый объект ошибки
//     throw new Error('response error')
//    }
//    console.log(res);

//    const data = await res.json()

//    console.log(data);

//    return data
//   } catch (error) {
//     console.error(`Error sending request: ${error}`)
//   }
// }

// fetchTodos()

const fetchAll = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!res.ok) {
      throw new Error('requested address is invalid ' + res.status)
    }
    const data = await res.json()
    console.log('--todos--', data)
    data.forEach((element) => {
      renderElems(element)
    })
  } catch (error) {
    console.error('Server error: ', error)
  }
}

const result = fetchAll()

// async function getResult() {
//   const res = await result
//   console.log(res)
// }

// getResult()
function renderElems(data) {
  const taskSolution = document.querySelector('.task2-solution')
  const el = document.createElement('div')
  const p = document.createElement('p')
  const descr = document.createElement('p')
  p.textContent = `${data.id}. title: ${data.title}`
  descr.textContent = `${data.id}. completed: ${data.completed}`
  el.append(p, descr)
  taskSolution.insertAdjacentElement('beforeend', el)
}

// https://jsonplaceholder.typicode.com/
// Отправить запросы на каждый из url, используя полную конструкцию отлова ошибок и исключений с помощью try catch, if(!res.ok) throw new Error()

const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--posts--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchPosts()

const fetchComments = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--comments--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchComments()

const fetchAlbums = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--albums--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchAlbums()

const fetchPhotos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--photos--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchPhotos()

const fetchUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--users--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchUsers()

// Задача 1 — только невыполненные
// API
// https://jsonplaceholder.typicode.com/todos
// Нужно
// После получения данных:
// оставить только completed === false
// вывести в DOM:
// title
// статус и кнопка (выполнено) рядом
// Доп условие
// Перед списком вывести:
// Невыполненных задач: X
const fetchCompltetedTodos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!res.ok) {
      throw new Error('requested address is invalid ' + res.status)
    }
    const data = await res.json()
    const completedData = data.filter((item) => item.completed === true)
    console.log('--completedTodos--', completedData)
    renderCompletedData(completedData)
  } catch (error) {
    console.error('Server error: ', error)
  }
}

function renderCompletedData(data) {
  const taskSolution = document.querySelector('.task1-solution')
  const list = document.querySelector('.task1-solution__list')
  taskSolution.insertAdjacentHTML(
    'afterbegin',
    `<h4>Выполненных задач: ${data.length}</h4>`,
  )
  data.forEach((item, index) => {
    list.insertAdjacentHTML(
      'beforeend',
      `
        <div>
            <p>${index + 1}. Title: ${item.title}</p>
            <div class="block">
                <p>${index + 1}. Status: ${item.completed}</p>
                <button class="btn">Выполнено</button>
            </div>
        </div>
    `,
    )
  })
}
fetchCompltetedTodos()

// Задача 3 — пользователи из определённого города
// API
// https://jsonplaceholder.typicode.com/users
// Нужно
// оставить только тех, кто живёт в "Gwenborough"
// вывести:
// Имя — email
const fetchUserFromDefiniteCity = async (city) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('requested address is invalid ' + res.status)
    }
    const data = await res.json()
    const filteredData = data.filter((item) => item.address.city === city)
    console.log('--user from Gwenborough--', filteredData)
    console.log(
      `--user from Gwenborough-- ${filteredData[0].name} - ${filteredData[0].email}`,
    )
  } catch (error) {
    console.error('Server error: ', error)
  }
}

fetchUserFromDefiniteCity('Gwenborough')

// Задача 5 — найти самую длинную
// API
// https://jsonplaceholder.typicode.com/posts
// Нужно
// Найти пост с самым длинным title
// и вывести только его.

const fetchLargestPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
      throw new Error('requested address is invalid ' + res.status)
    }
    const data = await res.json()
    const filteredData = data.sort((a, b) => b.title.length - a.title.length)
    console.log('--largestPost--', filteredData[0].title)
  } catch (error) {
    console.error('Server error: ', error)
  }
}

fetchLargestPost()

// TODO: две колонки + счётчики
// API:
// https://jsonplaceholder.typicode.com/todos
// Нужно:
// Получить todos.
// Взять только userId <= 3.
// Разделить на 2 массива:
// completed === false (в колонку “To do”)
// completed === true (в колонку “Done”)
// Отрисовать две секции в DOM:
// заголовок To do (X) и список задач (общее число выполненых)
// заголовок Done (Y) и список задач (общее число не выполненых)
// Для каждой задачи:
// если completed → добавь текст «Выполнено» перед title
// иначе «Не выполнено»

// Методы: filter, map, forEach (или reduce для счётчиков)
