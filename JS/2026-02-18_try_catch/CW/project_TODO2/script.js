const API_KEY = 'https://dummyjson.com/todos'

const todoListEl = document.querySelector('#todo__list')
const formEl = document.querySelector('#form')
const inputEl = document.querySelector('#input')
const statusEl = document.querySelector('#status')

let todos = []

function setStatus(message) {
  statusEl.textContent = message
}

function createTodoItem(todo) {
  todoListEl.insertAdjacentHTML(
    'beforeend',
    `
        <li class="todo-item" id="todo-${todo.id}">
            <label class="checkbox">
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                        ${todo.todo}
            </label>
        </li>
        `,
  )
}

function renderTodos() {
  todoListEl.innerHTML = ''
  if (todos.length === 0) {
    setStatus('No tasks yet')
  }
  todos.forEach((todo) => {
    createTodoItem(todo)
  })
}

async function fetchTodos() {
  try {
    setStatus('Loading...')
    const res = await fetch(API_KEY)
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    todos = data.todos
    console.log(todos)
  } catch (error) {
    console.error('--Server error--', error)
    setStatus('Error loading todos')
  }
  renderTodos()
  setStatus(`Done: ${todos.length} todos`)
}

async function addTodo(text) {
  try {
    setStatus('Adding...')
    const res = await fetch(`${API_KEY}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 1,
      }),
    })
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log(data)
    todos.unshift({
      id: data.id,
      todo: data.todo,
      completed: data.completed,
    })
  } catch (error) {
    console.error('--Server error--', error)
    setStatus('Error loading todos')
  }
  renderTodos()
  setStatus(`Done: ${todos.length} todos`)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (!text) return
  input.value = ''
  addTodo(text)
})

input.addEventListener('change', () => {})

fetchTodos()
