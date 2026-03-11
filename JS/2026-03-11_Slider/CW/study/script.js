// Задача 1 — Популярные продукты
// Есть массив товаров:
const products = [
  { name: 'Apple', price: 3, purchases: 10 },
  { name: 'Milk', price: 2, purchases: 25 },
  { name: 'Bread', price: 1.5, purchases: 5 },
  { name: 'Cheese', price: 6, purchases: 15 },
]
// Напишите функцию:
// getPopularProducts(products)
// Функция должна:
// Найти товары, которые покупали больше 10 раз
// Вернуть массив только названий товаров
// Ожидаемый результат:
// ["Milk", "Cheese"]
function getPopularProducts(products) {
  return products
    .filter((product) => product.purchases > 10)
    .map((product) => product.name)
}
console.log(getPopularProducts(products))

// Задача 2 — Общая сумма заказа
// Есть массив заказов:
const orders = [
  { id: 1, price: 20 },
  { id: 2, price: 15 },
  { id: 3, price: 40 },
  { id: 4, price: 10 },
]
// Напишите функцию:
// getTotalPrice(orders)
// Функция должна вернуть общую стоимость всех заказов.
// Ожидаемый результат:
// 85
function getTotalPrice(orders) {
  return orders.reduce((sum, { price }) => (sum += price), 0)
}
console.log(getTotalPrice(orders))

// Задача 3 — Проверка возраста
// Есть массив пользователей:
const users = [
  { name: 'John', age: 17 },
  { name: 'Kate', age: 22 },
  { name: 'Mike', age: 19 },
  { name: 'Anna', age: 16 },
]
// Напишите функцию:
// hasAdults(users)
// Функция должна вернуть:
// true
// если есть хотя бы один пользователь старше 18.
// Использовать:
// some
function hasAdults(users) {
  return users.some((user) => user.age > 18)
}
console.log(hasAdults(users))

// Задача 4 — Найти пользователя
// Есть массив:
{
  const users = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'John' },
  ]
  // Напишите функцию:
  // findUserById(users, id)
  // Функция должна вернуть объект пользователя по id.
  // Пример:
  // findUserById(users, 2)
  // Результат:
  // { id: 2, name: "Maria" }
  function findUserById(users, id) {
    return users.find((user) => user.id === id)
  }
  console.log(findUserById(users, 2))
}

// Задача 5 — Очистка массива
// Есть массив строк:
const words = ['hello', '', 'world', '', 'javascript']
// Напишите функцию:
// cleanWords(words)
// Функция должна:
// Удалить пустые строки
// Сделать все слова в верхнем регистре
// Ожидаемый результат:
// ["HELLO", "WORLD", "JAVASCRIPT"]
function cleanWords(words) {
  return words.filter((word) => word !== '').map(word => word.toUpperCase())
}
console.log(cleanWords(words))
