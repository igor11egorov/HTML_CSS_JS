const formRegistation = document.querySelector('.registration')
const formLogin = document.querySelector('.login')
const regMessage = document.querySelector('#registr-message')
const loginMessage = document.querySelector('#login-message')
const userKey = 'users'
let errors = []

formRegistation.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const name = target[0].value.trim()
  const phone = target[1].value.trim()
  const email = target[2].value.trim()
  const password = target[3].value.trim()

  if (!name || !phone || !email || !password)
    errors.push('Необходимо заполнить все поля')

  if (name.length < 2) errors.push('Имя должно состоять минимум из 2 символов')
  if (name.length > 24)
    errors.push('Имя должно состоять максимум из 24 символов')
  if (!isOnlyLetters(name)) errors.push('Имя должно состоять только из букв')

  if (phone[0] !== '+') errors.push('Телефон должен начинаться с символа +')
  if (phone.length < 8)
    errors.push('Телефон должен состоять минимум из 8 символов')
  if (phone.length > 12)
    errors.push('Телефон должен состоять максимум из 12 символов')
  if (!isOnlyDigits(phone.slice(1)))
    errors.push('Телефон должен состоять только из цифр')

  emailNOK(email)
  passwordNOK(password)

  if (errors.length > 0) {
    showError(regMessage, errors.join('<br>'))
    errors = []
    return
  }

  const users = extractUsers()
  users.push({ name, phone, email, password })
  saveUser(users)
  showSucces(regMessage)
  formRegistation.reset()
})

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const email = target[0].value.trim()
  const password = target[1].value.trim()

  if (!email || !password) errors.push('Необходимо заполнить все поля')
  emailNOK(email)
  passwordNOK(password)

  if (errors.length > 0) {
    showError(loginMessage, errors.join('<br>'))
    errors = []
    return
  }

  const users = extractUsers()
  const userExists = users.some(
    (user) => user.email === email && user.password === password,
  )
  if (userExists) {
    showSucces(loginMessage)
  } else {
    showError(
      loginMessage,
      'Пользователя с таким логином и паролем не существует',
    )
    return
  }
  formLogin.reset()
})

function emailNOK(email) {
  if (!email.includes('@')) errors.push('Почта должна содерждать символ @')
  if (email.length < 7)
    errors.push('Почта должна состоять минимум из 7 символов')
}

function passwordNOK(password) {
  if (password.length < 5)
    errors.push('Пароль должен состоять минимум из 5 символов')
  if (password.length > 26)
    errors.push('Пароль должен состоять максимум из 26 символов')
}

function saveUser(users) {
  localStorage.setItem(userKey, JSON.stringify(users))
}

function extractUsers() {
  return JSON.parse(localStorage.getItem(userKey)) || []
}

function isOnlyLetters(str) {
  return /^\p{L}+$/u.test(str)
}

function isOnlyDigits(str) {
  return /^[0-9]+$/.test(str)
}

function showError(field, message) {
  field.innerHTML = message
  field.style.color = 'red'
}

function showSucces(field) {
  field.textContent = 'Успешно'
  field.style.color = 'green'
}
