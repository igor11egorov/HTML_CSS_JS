// Задание 1
// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

const form = document.querySelector('#form')
const message = document.querySelector('#message')
const loginAdmin = 'admin'
const passwordAdmin = '12345'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const login = target[0].value
  const password = target[1].value
  if (login === loginAdmin && password === passwordAdmin) {
    message.textContent = 'Успешная авторизация'
    message.classList.remove('red')
    message.classList.add('green')
  } else {
    message.textContent = 'Ошибка авторизации'
    message.classList.remove('green')
    message.classList.add('red')
  }
  form.reset()
})
