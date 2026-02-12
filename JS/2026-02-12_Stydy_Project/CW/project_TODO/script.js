const form = document.querySelector('#create-form')
const key = 'todosStorage'
const search = document.querySelector('.search-field__input')
const activeTodos = document.querySelector('#filter-active')
const allTodos = document.querySelector('#filter-all')
const doneTodos = document.querySelector('#filter-done')
let activeButton = 0

renderTodos()
form.addEventListener('submit', createTodo)
search.addEventListener('input', searchTodo)
activeTodos.addEventListener('click', showActiveTodos)
allTodos.addEventListener('click', showAllTodos)
doneTodos.addEventListener('click', showDoneTodos)

function showDoneTodos() {
  activeButton = 2
  const filteredTodos = getTodos().filter((item) => item.done)
  renderTodos(filteredTodos)
}

function showActiveTodos() {
  activeButton = 1
  const filteredTodos = getTodos().filter((item) => !item.done)
  renderTodos(filteredTodos)
}

function showAllTodos() {
  activeButton = 0
  renderTodos()
}

function searchTodo() {
  let filteredTodos
  if (activeButton === 0) {
    filteredTodos = getTodos().filter((item) =>
      item.description.includes(search.value),
    )
  }
  if (activeButton === 1) {
    filteredTodos = getTodos().filter(
      (item) => item.description.includes(search.value) && !item.done,
    )
  }
  if (activeButton === 2) {
    filteredTodos = getTodos().filter(
      (item) => item.description.includes(search.value) && item.done,
    )
  }
  renderTodos(filteredTodos)
}

function deleteTodo(id) {
  const filteredTodos = getTodos().filter((item) => item.id !== id)
  saveTodos(filteredTodos)
  renderTodos()
}

function toggleTodoDone(id) {
  let showedTodos
  let filteredTodos = getTodos().map((item) => {
    if (item.id === id) {
      item.done = !item.done
    }
    return item
  })
  showedTodos = filteredTodos
  if (activeButton === 1) {
    showedTodos = filteredTodos.filter((item) => !item.done)
  }
  if (activeButton === 2) {
    showedTodos = filteredTodos.filter((item) => item.done)
  }
  saveTodos(filteredTodos)
  renderTodos(showedTodos)
}

function renderTodos(source) {
  const storageTodos = source ?? getTodos()
  if (storageTodos && Array.isArray(storageTodos)) {
    const container = document.querySelector('.todo-list')
    container.innerHTML = ''
    storageTodos.forEach((item) => {
      const startDate = new Date(item.startDate).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
      })
      const id = item.id
      container.insertAdjacentHTML(
        'beforeend',
        `
        <li class="todo-block">
            <label class="checkbox" for="${id}" onclick="toggleTodoDone('${id}')">
                <input type="checkbox" name="${id}" id="${id}" ${item.done ? 'checked' : ''}/>
                <span class="material-symbols-rounded checkbox__check-icon">
                    check
                </span>
            </label>
            <div class="todo-block__data">
                <p class="todo-block__date">${startDate}</p>
                <h3 class="todo-block__title">${item.description}</h3>
            </div>
            <span class="material-symbols-rounded" onclick="deleteTodo('${id}')">
                close
            </span>
        </li>
        `,
      )
    })
  }
}

function splitButtonClickHandler(e) {
  const splitButton = document.querySelector('.split-button')
  ;[...splitButton.children].forEach((item) => {
    item.classList.remove('split-button__button--active')
  })
  splitButton.children[e.id].classList.toggle('split-button__button--active')
}

function createTodo(e) {
  e.preventDefault()
  const startDate = document.querySelector('#startDate').value
  const description = document.querySelector('#description').value
  const todos = getTodos()
  const newTodo = {
    id: 'todo_' + Math.random().toString(16).slice(2),
    startDate,
    description,
    done: false,
    createdAt: new Date(),
  }

  if (todos && Array.isArray(todos)) {
    todos.push(newTodo)
    saveTodos(todos)
  } else {
    saveTodos([newTodo])
  }

  renderTodos()
  form.reset()
}

function getTodos() {
  return JSON.parse(localStorage.getItem(key))
}

function saveTodos(todos) {
  localStorage.setItem(key, JSON.stringify(todos))
}
