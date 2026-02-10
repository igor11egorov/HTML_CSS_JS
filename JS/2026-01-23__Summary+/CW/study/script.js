const checkPattern = (strFromClient) => {
  if (strFromClient.length !== 29) return 'Error'

  const arrFormStr = strFromClient.split('')
  const arrNumbers = []

  let countNumbersInArrNumbers = 0
  for (let i = 0; i < arrFormStr.length; i++) {
    const element = arrFormStr[i]

    if (element >= '0' && element <= '9') {
      arrNumbers.push(element)
      countNumbersInArrNumbers++
      if (countNumbersInArrNumbers === 4 && arrNumbers.length < 19) {
        arrNumbers.push(' ')
        countNumbersInArrNumbers = 0
      }
    }
  }

  if (arrNumbers.length !== 19) return 'Error'

  return arrNumbers.join('')
}

console.log(checkPattern('[[0000:.:0000:.:0000:.:0000]]'))
console.log(checkPattern('[[001200:.:0000:.:0000:.:0000]]'))
console.log(checkPattern('[[0000:.:1200:.:0340:.:0000]]'))
console.log(checkPattern('[[0000:.:0000:9:0000:.:0000]]'))

// У вас есть строка value. Нужно проверить, подходит ли она под формат A0A0.
// Сначала проверьте длину: строка должна быть ровно 4 символа. Если не 4 — сразу false.
// Проверьте 1-й символ (value[0]): он должен быть буквой. Если не буква — false.
// Проверьте 2-й символ (value[1]): он должен быть цифрой. Если не цифра — false.
// Проверьте 3-й символ (value[2]): он должен быть буквой. Если не буква — false.
// Проверьте 4-й символ (value[3]): он должен быть цифрой. Если не цифра — false.
// Если все проверки прошли — вернуть true.
const check = (abc) => {
  if (abc.length !== 4) {
    return false
  }
  const first = abc[0]
  if (first.toLowerCase() === first.toUpperCase()) {
    return false
  }
  const second = abc[1]
  if (second < '0' || second > '9') {
    return false
  }
  const third = abc[2]
  if (third.toLowerCase() === third.toUpperCase()) {
    return false
  }
  const fourth = abc[3]
  if (fourth < '0' || fourth > '9') {
    return false
  }

  return true
}

console.log(check('A1B2'))
console.log(check('a9Z0'))
console.log(check('AB12'))
console.log(check('A12B'))
console.log(check('1234'))

// Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.

const fromArrToObj = (arrKeys, arrValues) => {
  const obj = {}
  for (let i = 0; i < arrKeys.length; i++) {
    const key = arrKeys[i]
    const value = arrValues[i]
    obj[key] = value
  }
  return obj
}

console.log(fromArrToObj(['igor', 'anna', 'eugen', 'petr'], [34, 56, 45, 67]))
console.log(fromArrToObj(['igor', 'igor', 'eugen', 'eugen'], [34, 56, 45, 67]))

// Задача: Проверка формата по шаблону A00-A
// Нужно написать функцию check(value), которая проверяет, соответствует ли строка формату A00-A.
// Что означает формат
// A — буква
// 0 — цифра
// - — обязательный символ
// Формат по позициям:
// 1-й символ — буква
// 2-й символ — цифра
// 3-й символ — цифра
// 4-й символ — -
// 5-й символ — буква

// Условия
// Строка должна состоять ровно из 5 символов
// Каждый символ должен соответствовать своей позиции
// Если хотя бы одно условие нарушено — вернуть false
// Если всё верно — вернуть true
{
  const checkNotLetter = (symbol) => {
    return symbol.toLowerCase() === symbol.toUpperCase()
  }

  const checkNotNumber = (symbol) => {
    return symbol < '0' || symbol > '9'
  }

  const check = (str) => {
    if (str.length !== 5) return false

    const first = str[0]
    const third = str[2]
    if (checkNotLetter(first) || checkNotNumber(third)) return false

    const second = str[1]
    const fiveth = str[4]
    if (checkNotNumber(second) || checkNotLetter(fiveth)) return false

    const fourth = str[3]
    if (fourth !== '-') return false

    return true
  }

  console.log(check('A1B23'))
  console.log(check('A00-3'))
  console.log(check('A00-A'))
  console.log(check('000-A'))
}
