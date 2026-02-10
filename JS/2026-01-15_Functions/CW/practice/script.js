// 1. Проверка пароля
// Создайте функцию checkPassword, которая:
// запрашивает пароль
// если пароль длиннее 8 символов И содержит цифру — выводит "Пароль надёжный"
// иначе — "Пароль слабый"
console.log(`--Task1--`)

const checkPassword = (password) => {
  let includesNumber = false
  for (let i = 0; i <= 9; i++) {
    if (password.includes(i)) {
      includesNumber = true
      break
    }
  }
  console.log(
    password.length > 8 && includesNumber ? 'Пароль надёжный' : 'Пароль слабый'
  )
}
checkPassword('weiuq1qwq')

// 2. Определение времени суток
// Создайте функцию getDayTime, которая:
// запрашивает час (0–23)
// если час от 6 до 11 — "Утро"
// 12–17 — "День"
// 18–22 — "Вечер"
// 23–5 — "Ночь"
console.log(`--Task2--`)

function getDayTime(hour) {
  if (hour >= 6 && hour <= 11) {
    console.log('Morgen')
  } else if (hour >= 12 && hour <= 17) {
    console.log('Mittag')
  } else if (hour >= 18 && hour <= 22) {
    console.log('Abend')
  } else {
    console.log('Nacht')
  }
}

getDayTime(15)

// 3. Вывод чисел
// Создайте функцию printNumbers, которая:
// с помощью цикла for
// выводит числа от 1 до 10
// если число чётное — выводит "чётное", иначе "нечётное"
console.log(`--Task3--`)

const printNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i % 2 === 0 ? `${i} - even` : `${i} - odd`)
  }
}
printNumbers()

// 4. Сумма чисел
// Создайте функцию calculateSum, которая:
// запрашивает у пользователя 5 чисел
// считает их сумму с помощью цикла
// выводит результат
console.log(`--Task4--`)

const calculateSum = (num1, num2, num3, num4, num5) => {
  const arrNum = [num1, num2, num3, num4, num5]
  let sum = 0
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i]
  }
  console.log(sum)
}
calculateSum(1, 2, 12, 2, 4)

// 5. Проверка пользователя
// Создайте функцию checkUser, которая:
// создаёт объект user с полями:name, age, isAdmin
// если пользователь старше 18 И является администратором — выводит "Полный доступ"
// иначе — "Ограниченный доступ"
console.log(`--Task5--`)

const checkUser = (name, age, isAdmin) => {
  const user = {
    name: name,
    age: age,
    isAdmin: isAdmin,
  }
  console.log(
    user.name > 18 && isAdmin ? `Полный доступ` : `Ограниченный доступ`
  )
}
checkUser('Igor', 43, false)

// 6. Обновление объекта
// Создайте функцию updateProduct, которая:
// создаёт объект product с полями name и price
// запрашивает новую цену
// если цена больше 0 — обновляет объект
// иначе выводит "Некорректная цена"
console.log(`--Task6--`)

const updateProduct = (newPrice) => {
  const product = {
    name: 'Apple',
    price: 80,
  }
  if (newPrice > 0) {
    product.price = newPrice
    console.log(product)
  } else {
    console.log(`Некорректная цена`)
  }
}
updateProduct(69)
