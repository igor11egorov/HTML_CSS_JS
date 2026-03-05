// Создать класс "Калькулятор" с использованием статических методов и свойств. Класс должен иметь статическое свойство "PI", содержащее значение числа Пи, и статический метод "add", который принимает произвольное количество чисел и возвращает их сумму.
class Calculator {
  static PI = Math.PI
  static add(...args) {
    return args.reduce((sum, num) => (sum += num), 0)
  }
}

console.log(Calculator.PI)
console.log(Calculator.add(1, 2, 2, 2, 2, 2))
console.log(Calculator.add(12, 12, 12, 12))

// Реализовать класс "Банковский счет" с использованием статического метода "generateAccountNumber". Метод должен генерировать и возвращать уникальный номер счета. Уникальный номер должен состоять из префикса "ACC" и случайного числа, а также должен быть уникальным для каждого экземпляра класса.
class BankAccount {
  static busyAccounts = new Set()

  constructor() {
    this.createAccount = BankAccount.generateAccountNumber()
  }

  static generateAccountNumber() {
    let account

    do {
      account = `ACC${Math.floor(Math.random() * 1000)}`
    } while (BankAccount.busyAccounts.has(account))

    BankAccount.busyAccounts.add(account)
    console.log(BankAccount.busyAccounts)
    return account
  }
}

const acc1 = new BankAccount()
const acc2 = new BankAccount()
const acc3 = new BankAccount()

console.log(acc1.createAccount)
console.log(acc2.createAccount)
console.log(acc3.createAccount)

// Создать класс "Студент" с использованием статического метода "getAverageGrade". Метод должен принимать неограниченное количество оценок студента и возвращать среднюю оценку. Кроме того, класс должен иметь статическое свойство "passingGrade", которое определяет минимальную оценку для сдачи курса.
class Student {
  static passingGrade = 3.5
  static getAverageGrade(...scores) {
    const averageScore =
      scores.reduce((sum, score) => (sum += score), 0) / scores.length
    averageScore >= Student.passingGrade
      ? console.log('Passed')
      : console.log("Didn't pass")
    return averageScore
  }
}

console.log(Student.getAverageGrade(3, 4, 5, 5, 4, 5))
console.log(Student.getAverageGrade(3, 3, 3, 3, 3, 5))
