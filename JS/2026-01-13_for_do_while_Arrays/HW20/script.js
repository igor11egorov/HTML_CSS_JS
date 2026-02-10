// 1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).

const arrNumbers = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

for (let i = 0; i < arrNumbers.length; i++) {
  console.log(arrNumbers[i])
}
console.log('====')

// 2) Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

for (let i = 0; i < arrNumbers.length; i++) {
  if (arrNumbers[i] < 20 && arrNumbers[i] > 8) {
    console.log(arrNumbers[i])
  }
}
console.log('====')

// 3) Создайте массив чисел и найдите минимальное значение.

let min = arrNumbers[0]
for (let i = 1; i < arrNumbers.length; i++) {
  if (arrNumbers[i] < min) {
    min = arrNumbers[i]
  }
}
console.log(min)
console.log('====')

// 4) *Создайте массив чисел и обновите значение элемента по индексу.

for (let i = 0; i < arrNumbers.length; i++) {
  arrNumbers[i] = i
}
console.log(arrNumbers)
console.log('====')

// 5) * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

const favoriteColors = ['black', 'white', 'lightblue', 'green', 'red', 'cyan']

let maxLength = favoriteColors[0].length
let indexMaxLengthWord = 0
for (let i = 0; i < favoriteColors.length; i++) {
  const element = favoriteColors[i].length
  if (element > maxLength) {
    maxLength = element
    indexMaxLengthWord = i
  }
}
console.log(favoriteColors[indexMaxLengthWord])
console.log('====')
