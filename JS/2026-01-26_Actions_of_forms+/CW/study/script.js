// по клику на сабмит выводить данные в объекте в консоль

const form = document.querySelector('#form')

// console.log([form])

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const name = target[0].value
  const email = target[1].value
  const phone = target[2].value
  const company = target[3].value

  const objFromForm = {
    name: name,
    email: email,
    phone: phone,
    company: company,
  }
  console.log(objFromForm)
  //   console.log([target])
  form.reset()
})

//создать 2 инпута, по клику на кнопку отправлять данные в консоль (без формы)

const btn = document.querySelector('.btn-task2')
const phone = document.querySelector('#phone2')
const company = document.querySelector('#company2')

btn.addEventListener('click', () => {
  console.log(`Phone: ${phone.value}`)
  console.log(`Company: ${company.value}`)
})

// Создать HTML-форму, которая включает в себя:

//  Поля ввода:
// фамилии
// имени
// email
// пароля
// даты рождения
// Кнопки отправки и очистки
// Чекбокс с текстом “Подписаться на email рассылку”

// Поле ввода почты должно содержать символ “@”, пароль должен быть длиннее 6 символов, в случае ошибки, выводить текст, содержащий сообщение об ошибке.

// Если все условия выполнены, очистить поля формы и показать сообщение об успехе.
// Добавить произвольные поля.

const form3 = document.querySelector('#form3')
const errorEmail = document.querySelector('#error-email')
const errorPassword = document.querySelector('#error-password')
const errorCheck = document.querySelector('#error-check')
const message = document.querySelector('#message')
const btnReset = document.querySelector('#btn-reset');

form3.addEventListener('submit', (e) => {
  e.preventDefault()
  const target = e.target
  const email = target[2].value
  const password = target[3].value
  const check = target[4].checked
  let countError = 0

  if (!email.includes('@')) {
    errorEmail.textContent = 'Должен содержать @'
    errorEmail.classList.toggle('hidden')
    countError++
  }
  if (password.length <= 6) {
    errorPassword.textContent = 'Должен быть больше 6 символов'
    errorPassword.classList.toggle('hidden')
    countError++
  }
  if (!check) {
    errorCheck.textContent = 'Необходимо согласие'
    errorCheck.classList.toggle('hidden')
    countError++
  }
  if (countError === 0) {
    console.log(countError);
    message.textContent = 'Успешная отправка'
    message.classList.toggle('hidden')
    form3.submit()
  } else {
    console.log(countError);
    message.textContent = 'Отправка невозможна'
    message.classList.toggle('hidden')
    form3.reset();
  }
})

btnReset.addEventListener('click', (e) => {
  form3.reset();
})
