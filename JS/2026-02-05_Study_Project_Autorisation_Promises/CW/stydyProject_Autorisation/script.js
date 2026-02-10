const formRegistation = document.querySelector('.registration')
const formLogin = document.querySelector('.login')
const regMessage = document.querySelector('#registr-message')
const loginMessage = document.querySelector('#login-message')
const userKey = 'users'

function saveUser(users) {
  localStorage.setItem(userKey, JSON.stringify(users))
}

function extractUsers() {
  return JSON.parse(localStorage.getItem(userKey)) || []
}

formRegistation.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const name = target[0].value.trim()
  const phone = target[1].value.trim()
  const email = target[2].value.trim()
  const password = target[3].value.trim()

  if (!name || !phone || !email || !password) {
    regMessage.textContent = 'Fill all fields'
    regMessage.style.color = 'red'
    return
  }
  const users = extractUsers()
  users.push({ name, phone, email, password })
  saveUser(users)
  regMessage.textContent = 'Succes'
  regMessage.style.color = 'green'
  formRegistation.reset()
})

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const email = target[0].value.trim()
  const password = target[1].value.trim()

  if (!email || !password) {
    loginMessage.textContent = 'Fill all fields'
    loginMessage.style.color = 'red'
    return
  }
  const users = extractUsers()
  const userExists = users.some(
    (user) => user.email === email && user.password === password,
  )
  console.log(userExists)
  if (userExists) {
    loginMessage.textContent = 'Succes'
    loginMessage.style.color = 'green'
  } else {
    loginMessage.textContent = `User doesn't exist`
    loginMessage.style.color = 'red'
    return
  }
  formLogin.reset()
})
