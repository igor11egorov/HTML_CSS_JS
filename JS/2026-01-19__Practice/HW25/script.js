// Задание 1
// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

const numbers = [4, 5, 1, 2, -5, 2, -7, 1]

const mutliplyArr = (arr) => {
  let multiplication = 1
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    multiplication *= element
  }
  return multiplication
}

console.log(mutliplyArr(numbers))

// Задание 2
// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

const sumArr = (arr) => {
  let sum = 0
  let i = 0
  while (i < arr.length) {
    sum += arr[i]
    i++
  }
  return sum
}

console.log(sumArr(numbers))
