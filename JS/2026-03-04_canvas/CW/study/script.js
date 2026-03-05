const nums = [1, 2, 3, 4, 5]

const filterNum = () => nums.filter((num) => num > 3)

console.log(filterNum())

// Задача 1. Фильтрация и преобразование пользователей
// Есть массив пользователей:
const users = [
  { name: 'Alex', age: 25, isActive: true },
  { name: 'Maria', age: 17, isActive: true },
  { name: 'John', age: 32, isActive: false },
  { name: 'Kate', age: 21, isActive: true },
]
// Напишите функцию getActiveAdults(users), которая:
// Оставляет только активных пользователей (isActive === true)
// Оставляет только пользователей старше 18
// Возвращает массив строк вида:
// "ALEX (25)"
// "KATE (21)"
const getActiveAdults = (users) =>
  users
    .filter((user) => user.isActive && user.age >= 18)
    .map((user) => `${user.name.toUpperCase()} (${user.age})`)

console.log(getActiveAdults(users))

// Задача 2. Подсчет общей стоимости товаров
// Есть массив товаров:
const products = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 600, quantity: 1 },
  { name: 'Keyboard', price: 100, quantity: 3 },
]
// Напишите функцию getTotalPrice(products) которая:
// Считает общую стоимость всех товаров
// Учитывает price * quantity
// Возвращает итоговое число.
// Ожидаемый результат:
// 2900
const getTotalPrice = (products) =>
  products.reduce((acc, { price, quantity }) => (acc += price * quantity), 0)

console.log(getTotalPrice(products))

// Задача 3. Найти самый дорогой товар
// Есть массив товаров:
{
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Keyboard', price: 100 },
    { name: 'Monitor', price: 800 },
  ]
  // Напишите функцию getMostExpensive(products) которая возвращает объект самого дорогого товара.
  // Результат:
  // { name: "Laptop", price: 1000 }
  // Использовать: reduce.
  const getMostExpensive = (products) =>
    products.reduce((max, { price }) => (price > max.price ? price : max))

  console.log(getMostExpensive(products))
}

// Задача 4. Группировка пользователей по возрасту
// Есть массив пользователей:
{
  const users = [
    { name: 'Alex', age: 25 },
    { name: 'Maria', age: 17 },
    { name: 'John', age: 32 },
    { name: 'Kate', age: 15 },
  ]
  // Напишите функцию groupByAge(users) которая возвращает объект:
  // {
  //   adults: [ { name: "Alex", age: 25 }, { name: "John", age: 32 } ],
  //   minors: [ { name: "Maria", age: 17 }, { name: "Kate", age: 15 } ]
  // }
  //   const groupByAge = (users) => {
  //     let adults = []
  //     let minors = []
  //     users.forEach((user) =>
  //       user.age >= 18 ? adults.push(user) : minors.push(user),
  //     )
  //     return {
  //       adults: adults,
  //       minors: minors,
  //     }
  //   }
  const groupByAge = (users) =>
    users.reduce(
      (acc, user) => {
        user.age >= 18 ? acc.adults.push(user) : acc.minors.push(user)
        return acc
      },
      { adults: [], minors: [] },
    )
  console.log(groupByAge(users))
}

// Задача 5. Работа с объектом и Object.entries
// Есть объект с количеством товаров на складе:
const stock = {
  apple: 10,
  banana: 5,
  orange: 0,
  mango: 8,
}
// Напишите функцию getAvailableProducts(stock) которая:
// Убирает товары где количество 0
// Возвращает массив строк:
// ["apple: 10", "banana: 5", "mango: 8"]
// Использовать:
// Object.entries, filter, map.
const getAvailableProducts = (stock) =>
  Object.entries(stock)
    .filter(([name, count]) => count !== 0)
    .map(([name, count]) => `${name}: ${count}`)

console.log(getAvailableProducts(stock))

// Задача 1. Подсчет популярности товаров
// Есть массив заказов:
const orders = [
  { user: 'Alex', products: ['phone', 'laptop'] },
  { user: 'Maria', products: ['phone'] },
  { user: 'John', products: ['keyboard', 'laptop'] },
  { user: 'Kate', products: ['phone', 'keyboard'] },
]
// Напишите функцию getProductStats(orders) которая возвращает объект:
// {
//   phone: 3,
//   laptop: 2,
//   keyboard: 2
// }
// То есть сколько раз каждый товар был куплен.

const getProductStats = (orders) => {
  return orders.reduce((acc, { products }) => {
    products.forEach((product) => {
      if (!acc[product]) {
        acc[product] = 0
      }
      acc[product] += 1
    })
    return acc
  }, {})
}

console.log(getProductStats(orders))
