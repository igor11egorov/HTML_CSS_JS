const btn = document.querySelector('.btn')
const email = document.querySelector('#email')

btn.addEventListener('click', (e) => {
    //можно доставать значение инпута по любому другому события, используя поле value
    console.log(email.value)
})

const form = document.querySelector('#form')

console.log([form])
//событие формы
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const target = e.target
    const email = target[0].value
    const password = target[1].value
    console.log([target])
})
//событие input срабаывает каждый раз при взаимодействии и инпутом
email.addEventListener('input', (e) => {
    console.log(e.target.value)
})

