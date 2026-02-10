// Вывести числа от 1 до 5, прервать цикл, если текущее число равно 3.

for (let i = 1; i <= 5; i++) {
  console.log(i)
  if (i === 3) {
    break
  }
}
console.log('====')

{
  let i = 0
  while (i <= 5) {
    i++
    console.log(i)
    if (i === 3) {
      break
    }
  }
  console.log('====')
}

// Вывести только нечетные числа от 1 до 6, используя continue.

for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}
console.log('====')

{
  let i = 0
  while (i < 6) {
    i++
    if (i % 2 === 0) {
      continue
    }
    console.log(i)
  }
  console.log('====')
}

// Вывести числа от 1 до 10, прервать цикл, если текущее число больше 7.

for (let i = 1; i <= 10; i++) {
  console.log(i)
  if (i === 7) {
    break
  }
}
console.log('====')

{
  let i = 0
  while (i < 10) {
    i++
    console.log(i)
    if (i === 7) {
      break
    }
  }
  console.log('====')
}

// Вывести числа от 1 до 5, пропустить вывод числа 3 с использованием continue.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}
console.log('====')

{
  let i = 0
  while (i < 5) {
    i++
    if (i === 3) {
      continue
    }
    console.log(i)
  }
  console.log('====')
}

// Создайте массив с вашими любимыми цветами и выведите его в консоль.

const favoriteColors = ['black', 'white', 'blue', 'green', 'red', 'cyan']

for (let i = 0; i < favoriteColors.length; i++) {
  const element = favoriteColors[i]
  console.log(element)
}
console.log('====')

// Создайте массив чисел и выведите каждый элемент в консоль.

const numbers = [23, 4, 454, 322, 1, -1, 0, -12, 24, -4, -343, 45]

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  console.log(element)
}
console.log('====')

// Создайте массив чисел и выведите только четные числа.

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  if (element % 2 === 0) {
    console.log(element)
  }
}
console.log('====')

// Создайте массив чисел и найдите их сумму.

let sum = 0
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  sum += element
}
console.log(sum)
console.log('====')

// Создайте массив строк и выведите их в обратном порядке.
for (let i = favoriteColors.length - 1; i >= 0; i--) {
  const element = favoriteColors[i]
  console.log(element)
}
console.log('====')

// or

for (let i = 0; i < favoriteColors.length; i++) {
  const element = favoriteColors[favoriteColors.length - 1 - i]
  console.log(element)
}
console.log('====')

// Создайте массив чисел и выведите только числа больше 10.

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  if (element > 10) {
    console.log(element)
  }
}
console.log('====')

// Создайте массив строк и выведите длину каждой строки в консоль.

for (let i = 0; i < favoriteColors.length; i++) {
  const element = favoriteColors[i]
  console.log(element.length)
}
console.log('====')

// Создайте массив чисел и найдите наибольшее число.

let max = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  const element = numbers[i]
  if (element > max) {
    max = element
  }
}
console.log(max)
console.log('====')

// Создайте массив чисел и выведите только нечетные числа.

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  if (element % 2 !== 0) {
    console.log(element)
  }
}
console.log('====')
