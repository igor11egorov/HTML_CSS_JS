// Задания 1. 
// Объявите две переменные firstName и lastName и присвойте им ваши имя и фамилию.
// С помощью конкатенации строк создайте третью переменную greeting, содержащую приветствие в формате "Привет, Имя Фамилия!".
// Выведите переменную greeting в консоль.

const firstName = 'Igor'
const lastName = 'Egorov'

let greetingConcatenation = 'Привет, ' + firstName + ' ' + lastName + '!'
let greetingInterpolation = `Привет, ${firstName} ${lastName}!`
console.log(greetingConcatenation)
console.log(greetingInterpolation)


// Задания 2.*
// Создайте переменную sentencePart1 и присвойте ей начало предложения (например, "Я люблю").
// Создайте переменную sentencePart2 и присвойте ей завершение предложения (например, "программирование").
// С помощью конкатенации строк создайте переменную completeSentence, объединяющую обе части предложения.
// Выведите переменную completeSentence в консоль.

const sentencePart1 = 'Я люблю'
const sentencePart2 = 'программирование'

let completeSentence = sentencePart1 + ' ' + sentencePart2
console.log(completeSentence)