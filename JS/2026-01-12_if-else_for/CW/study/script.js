// 1.Вывести числа от 1 до 5 в консоль.

for (let i = 1; i <= 5; i++) {
  console.log(i)
}
console.log('=====')

// 2.Вывести квадраты чисел от 1 до 3 в консоль.

for (let i = 1; i <= 3; i++) {
  //   console.log(i * i)
  //   console.log(Math.pow(i, 2))
  console.log(i ** 2)
}
console.log('=====')

// 3.Вывести только четные числа от 2 до 8 в консоль.

for (let i = 2; i <= 8; i = i + 2) {
  console.log(i)
}
console.log('=====')

// 4.Вывести числа от 10 до 1 в обратном порядке.

for (let i = 10; i >= 1; i--) {
  console.log(i)
}
console.log('=====')

// способ2

for (let i = 1; i <= 10; i++) {
  console.log(11 - i)
}
console.log('=====')

// 5.Вывести таблицу умножения на 3 (от 1 до 10).

for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${i * 3}`)
}
console.log('=====')

// 6.Вывести числа от 1 до 7 в консоль.

for (let i = 1; i <= 7; i++) {
  console.log(i)
}
console.log('=====')

// 7.Вывести кубы чисел от 1 до 4 в консоль.

for (let i = 1; i <= 4; i++) {
  console.log(Math.pow(i, 3))
}
console.log('=====')

// 8.Вывести только нечётные числа от 1 до 9 в консоль.

for (let i = 1; i <= 9; i = i + 2) {
  console.log(i)
}
console.log('=====')

// 9.Вывести числа от 20 до 10 в обратном порядке.

for (let i = 20; i >= 10; i--) {
  console.log(i)
}
console.log('=====')

// 10.Вывести таблицу умножения на 5 (от 1 до 10).

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${i * 5}`)
}
console.log('=====')

// 11. Подсчитать сумму чисел от 1 до 10

let sum = 0
for (let i = 0; i < 10; i++) {
  sum += i
}
console.log(sum)
console.log('=====')

// Задача 1
// Посчитать сумму чисел от 1 до 5 и вывести каждое число в консоль.

let count = 0
for (let i = 1; i <= 5; i++) {
  count += i
  console.log(`${count - i} + ${i} = ${count}`)
}
console.log('=====')

// Задача 2
// Посчитать сумму чётных чисел от 1 до 10 и вывести только чётные числа в консоль.

let amount = 0
for (let i = 2; i <= 10; i = i + 2) {
  amount += i
  console.log(`${amount - i} + ${i} = ${amount}`)
}
console.log(amount)
console.log('=====')

// Определение положения числа:
// 	Объявите переменную number и присвойте ей любое число.
// 	Используя условия if, else if и else, определите, является ли число положительным, отрицательным или нулем.
// 	Выведите соответствующее сообщение в консоль.

const number = -12
if (number > 0) {
  console.log('положительно')
} else if (number < 0) {
  console.log('отрицательно')
} else {
  console.log('ноль')
}

// 	Оценка студента:
// 	Объявите переменную grade и присвойте ей значение от 1 до 5.
// 	Используя условия if, else if и else, определите оценку студента (например, "Отлично", "Хорошо", "Удовлетворительно", "Неудовлетворительно").
// 	Выведите результат в консоль.

const grade = 3
if (grade === 5) {
  console.log('five')
} else if (grade === 4) {
  console.log('four')
} else if (grade === 3) {
  console.log('three')
} else if (grade === 2) {
  console.log('two')
} else {
  console.log('one')
}

// Объявите переменную month и присвойте ей значение от 1 до 12, представляющее месяц.
// 	Используя конструкцию switch, определите текущий сезон (весна, лето, осень, зима) и выведите его в консоль.

const month = 13

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('winter')
    break
  case 3:
  case 4:
  case 5:
    console.log('frueling')
    break
  case 6:
  case 7:
  case 8:
    console.log('summer')
    break
  case 9:
  case 10:
  case 11:
    console.log('herbst')
    break

  default:
    console.log('other')
    break
}
