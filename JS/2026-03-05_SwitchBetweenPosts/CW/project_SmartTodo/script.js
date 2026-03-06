// Smart Todo (1 список)
// Данные
// Массив объектов:
// // пример
// { id: 1, text: "Buy milk", done: false, createdAt: 1710000000 }

// Подзадача 1 (чел 1): Верстка + базовый рендер
// Сделать HTML:
// input + кнопка Add
// список <ul>
// панель: поиск (input) + фильтр (select: all/active/done)
// место для счетчика (например <div id="stats"></div>)
// Функция render(todos):
// очищает <ul>
// рисует каждый todo как <li data-id="...">
// внутри: чекбокс, текст, кнопка Delete

// Подзадача 2 (чел 2): Добавление + валидация
// Функции:
// createTodo(text) → возвращает объект (id можно через static counter/Date.now(), done=false, createdAt=Date.now())
// addTodo(todos, text) → возвращает новый массив (или мутирует, но единообразно)
// Валидация:
// trim()
// длина >= 3
// иначе показать ошибку под инпутом

// Подзадача 3 (чел 3): Делегирование событий + toggle done
// Один обработчик на <ul> (event delegation).
// По клику на checkbox:
// найти todo по id
// переключить done
// Функция:
// toggleTodo(todos, id) → обновляет done
// После — render(visibleTodos).

// Подзадача 4 (чел 4): Удаление + очистка выполненных
// Delete по кнопке внутри <li> (через delegation).
// Функции:
// deleteTodo(todos, id) → новый массив через filter
// clearDone(todos) → удаляет все done === true (кнопка “Clear done” рядом)

// Подзадача 5 (чел 5): Поиск + фильтр + статистика
// Сделать состояние UI:

// const ui = { query: "", filter: "all" } // all|active|done

// Функция:
// getVisibleTodos(todos, ui):
// поиск case-insensitive по text
// фильтр all/active/done
// вернуть массив
// Статистика:
// всего
// активных
// выполненныхПосчитать через reduce и вывести в #stats.

// Правила: укладываем в 80 минут
// Без редактирования текста
// Без localStorage
// Без сортировок
// Все изменения только через функции: add/toggle/delete/clear/getVisible/render

{
  const key = 'todosStorage'

  const todos = []

  function renderTodos(arr) {
    const todos = arr ?? getTodos()
    if (todos && Array.isArray(todos)) {
      const todoList = document.querySelector('.todo-list')
      todoList.innerHTML = ''
      todos.forEach((item) => {
        // const startDate = new Date(item.startDate).toLocaleString("ru-RU", {
        //     day: "numeric",
        //     month: "long",
        //     hour: "numeric",
        //     minute: "numeric",
        // });
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
<!--                            <p class="todo-block__date">${startDate}</p>-->
                            <h3 class="todo-block__title">${item.description}</h3>
                        </div>
                        <span class="material-symbols-rounded"
<!--                         onClick="deleteTodo('${id}')-->
                         ">
                            close
                        </span>
                        </li>
                    `
        todoList.insertAdjacentHTML('beforeend', element)
      })
    }
  }

  function toggleTodoDone(id) {
    const todos = getTodos()

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo
    })
    saveTodos(updatedTodos)
    // filterAndRenderTodos()
  }

  function getTodos() {
    return JSON.parse(localStorage.getItem(key)) ?? []
  }

  function saveTodos(todos) {
    localStorage.setItem(key, JSON.stringify(todos))
  }




  const form = document.querySelector('.create-form')
  const error = document.querySelector('.error');

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const description = document
      .querySelector('#description').value.trim()
  })

  function createTodo(text) {
    return new Todo(text)
  }

  function addTodo(todos, text) {
    if (text.length <= 3) {
        error.classList.toogle('hidden')
    }
    todos.push(createTodo(text))
  }

  class Todo {
    static counter = 0

    constructor(description) {
      this.id = ++Todo.counter
      this.description = description
      this.createdAt = Date.now()
      this.done = false
    }
  }

//   const todo1 = new Todo('12123')
//   console.log(todo1)
//   const todo2 = new Todo('2222')
//   console.log(todo2)
}
