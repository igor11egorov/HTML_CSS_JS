let todos = [
  { id: 1, description: 'Buy milk', done: false, createdAt: 1710000000 },
  { id: 2, description: 'Go to gym', done: true, createdAt: 1710003600 },
  { id: 3, description: 'Read a book', done: false, createdAt: 1710007200 },
  { id: 4, description: 'Write code', done: false, createdAt: 1710010800 },
  { id: 5, description: 'Walk the dog', done: true, createdAt: 1710014400 },
  { id: 6, description: 'Call mom', done: false, createdAt: 1710018000 },
  { id: 7, description: 'Buy groceries', done: false, createdAt: 1710021600 },
  { id: 8, description: 'Watch movie', done: true, createdAt: 1710025200 },
]

const form = document.querySelector('#create-form')
const error = document.querySelector('.error')
const count = document.querySelector('#stats')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo(todos, form[0].value)
  form.reset()
})

function renderTodos(todos) {
  const todoList = document.querySelector('.todo-list')
  todoList.innerHTML = ''
  todos.forEach((item) => {
    const id = item.id
    const element = `
                        <li class="todo-block">
                        <label class="checkbox" htmlFor="${id}" onClick="toggleTodoDone('${id}')">
                            <input type="checkbox" name="${id}" id="${id}" ${item.done ? 'checked' : ''}/>
                            <span class="material-symbols-rounded checkbox__check-icon">
                                check
                            </span>
                        </label>
                        <div class="todo-block__data">
                            <h3 class="todo-block__title">${item.description}</h3>
                        </div>
                        <span class="material-symbols-rounded"
                        onClick="deleteTodo('${id}')
                         ">
                            close
                        </span>
                        </li>
                    `
    todoList.insertAdjacentHTML('beforeend', element)
  })
}

function toggleTodoDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === Number(id)) {
      return {
        ...todo,
        done: !todo.done,
      }
    }
    return todo
  })

  console.log(todos)
}

function createTodo(text) {
  return new Todo(text)
}

class Todo {
  static counter = 0
  constructor(description) {
    this.id = ++Todo.counter
    this.description = description
    this.done = false
    this.createdAt = Date.now()
  }
}

function addTodo(todos, text) {
  if (!error.classList.contains('hidden')) {
    error.classList.add('hidden')
  }
  if (text.length <= 3) {
    error.classList.remove('hidden')
  } else {
    todos.push(createTodo(text))
    renderTodos(todos)
  }
}

function deleteTodo(id) {
  console.log(id);
  todos = todos.filter(todo => todo.id !== +id)
  console.log(todos);
  renderTodos(todos)
}

renderTodos(todos)
