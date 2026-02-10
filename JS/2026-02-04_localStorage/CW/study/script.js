const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  const theme = localStorage.getItem('theme')
  const html = document.querySelector('html')
  if (theme) {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      html.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
      html.setAttribute('data-theme', 'light')
    }
  } else {
    localStorage.setItem('theme', 'dark')
    html.setAttribute('data-theme', 'dark')
  }
})

// Создайте простую HTML-страницу с текстовым полем ввода, кнопкой "Сохранить" и блоком, в который будет выводиться сохраненное имя. При вводе имени и нажатии кнопки "Сохранить", имя должно сохраняться в Local Storage и отображаться на странице при обновлении.
// Подсказка: в скрипте обязательно надо проверять есть ли что то в локальном хранилище или нет даже до того как там действительно вы что то пропишите
const obj = {
    name: 'Yury',
    lastName: 'Arakelov'
}

//localStorage хранит данные в строчном формате
// localStorage.setItem('person', obj) //[object object результат]
//JSON.stringify - переводит объект в строчный формат json
localStorage.setItem('person', JSON.stringify(obj))
//JSON.parse - чтобы перевести из строчного JSON в объект
const person = JSON.parse(localStorage.getItem('person'))
console.log(person);

// Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.

const mainKey = 'person'

const writeLocalStorage = (key, valueObj) => {
    localStorage.setItem(key, JSON.stringify(valueObj))
}

writeLocalStorage(mainKey, personObj)

const readLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

console.log(readLocalStorage(mainKey))
// Задача 1. Сохранение темы приложения
// Условие:
// В приложении есть переключатель темы ("light" / "dark").
// Нужно реализовать две функции:
// saveTheme(theme)
// loadTheme()
// Требования:
// saveTheme сохраняет текущую тему в localStorage
// loadTheme возвращает сохранённую тему
// если тема не сохранена — возвращает "light"
// Пример использования:

// saveTheme("dark")

// const theme = loadTheme() // "dark"
// Задача 2. Хранение списка задач
// Условие:
// Есть список задач (todo), который должен сохраняться между перезагрузками страницы.
// Нужно реализовать две функции:
// saveTodos(todos)
// loadTodos()
// Требования:
// saveTodos принимает массив объектов и сохраняет его в localStorage
// loadTodos возвращает массив задач
// если в localStorage ничего нет — возвращает пустой массив
// Пример структуры данных:

// [
//   { id: 1, text: "Learn JS", done: false },
//   { id: 2, text: "Practice React", done: true },
// ]

// Задача 3. Сохранение имени пользователя
// Условие:
// Пользователь вводит своё имя в input.
// Нужно реализовать функции:
// saveUserName(name)
// loadUserName()
// Требования:
// имя сохраняется в localStorage
// при загрузке страницы имя автоматически подставляется в input
// если имя не сохранено — возвращается пустая строка

// Задача 4. Счётчик посещений
// Условие:
// Нужно посчитать, сколько раз пользователь открыл страницу.
// Нужно реализовать функцию:
// incrementVisits()
// Требования:
// при каждом вызове функция увеличивает счётчик в localStorage
// функция возвращает текущее количество посещений
// при первом запуске значение должно быть 1

// Задача 5. Сохранение выбранного языка
// Условие:
// В приложении есть выбор языка ("en", "ru").
// Нужно реализовать функции:
// saveLanguage(lang)
// loadLanguage()
// Требования:
// язык сохраняется в localStorage
// при загрузке страницы возвращается сохранённый язык
// если язык не выбран — используется "en"
// Задача 6. История поисковых запросов
// Условие:
// Приложение хранит последние поисковые запросы пользователя.
// Нужно реализовать функции:
// addSearchQuery(query)
// getSearchHistory()
// Требования:
// каждый новый запрос добавляется в массив в localStorage
// хранится не более 5 последних запросов