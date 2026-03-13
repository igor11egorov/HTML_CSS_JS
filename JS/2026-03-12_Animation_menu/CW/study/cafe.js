// Система заказов в кафе
// Нужно реализовать небольшую систему обработки заказов для кафе.
// Есть массив заказов:
const orders = [
  { id: 1, customer: 'Alice', items: ['coffee', 'cake'], total: 8 },
  { id: 2, customer: 'Bob', items: ['tea'], total: 3 },
  { id: 3, customer: 'Alice', items: ['sandwich', 'coffee'], total: 10 },
  { id: 4, customer: 'Charlie', items: ['cake'], total: 4 },
]
// Каждый заказ содержит:
// id — номер заказа
// customer — имя клиента
// items — список товаров
// total — стоимость заказа
// Часть 1 — Найти заказы клиента
// Напишите функцию:
// getOrdersByCustomer(orders, name)
// Функция должна возвращать все заказы конкретного клиента.
// Пример:
// getOrdersByCustomer(orders, "Alice")
// Результат:
// [
//   { id: 1, customer: "Alice", items: ["coffee", "cake"], total: 8 },
//   { id: 3, customer: "Alice", items: ["sandwich", "coffee"], total: 10 }
// ]
// Использовать filter.
// Часть 2 — Общая сумма заказов клиента
// Напишите функцию:
// getTotalSpentByCustomer(orders, name)
// Функция должна вернуть общую сумму всех заказов клиента.
// Пример:
// getTotalSpentByCustomer(orders, "Alice")
// Результат:
// 18
// Использовать reduce.
// Список всех заказанных товаров
// Напишите функцию:
// getAllItems(orders)
// Функция должна вернуть массив всех товаров из всех заказов.
// Результат:
// [
//  "coffee",
//  "cake",
//  "tea",
//  "sandwich",
//  "coffee",
//  "cake"
// ]

function getOrdersByCustomer(orders, name) {
  return orders.filter((order) => order.customer === name)
}

console.log(getOrdersByCustomer(orders, 'Alice'))

function getTotalSpentByCustomer(orders, name) {
  return orders.reduce((acc, order) => {
    if (order.customer === name) acc += order.total
    return acc
  }, 0)
}

console.log(getTotalSpentByCustomer(orders, 'Alice'))

function getAllItems(orders) {
  return orders.reduce((acc, order) => {
    order.items.forEach((item) => acc.push(item))
    return acc
  }, [])
}
console.log(getAllItems(orders))
