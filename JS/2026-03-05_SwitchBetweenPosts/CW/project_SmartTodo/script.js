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