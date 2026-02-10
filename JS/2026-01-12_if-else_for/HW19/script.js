// Задания 1.*
// Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число) и выводить оценку в виде буквенного символа по следующей шкале:
// 90 и выше: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Меньше 60: 'F'

const grade = 60

if (grade >= 90) {
  console.log(grade, '- A')
} else if (grade >= 80 && grade <= 89) {
  console.log(grade, '- B')
} else if (grade >= 70 && grade <= 79) {
  console.log(grade, '- C')
} else if (grade >= 60 && grade <= 69) {
  console.log(grade, '- D')
} else if (grade < 60) {
  console.log(grade, '- F')
}

// Задания 2.*
// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).
// Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

const dayOfWeek = 6
switch (dayOfWeek) {
  case 1:
    console.log('Montag')
    break
  case 2:
    console.log('Dienstag')
    break
  case 3:
    console.log('Mittwoch')
    break
  case 4:
    console.log('Donnerstag')
    break
  case 5:
    console.log('Freitag')
    break
  case 6:
    console.log('Samstag')
    break
  case 7:
    console.log('Sontag')
    break
  default:
    console.log('????')
    break
}
