// Система заказов в кафе
// Нужно реализовать небольшую систему обработки заказов для кафе.
// Есть массив заказов:
// const orders = [
//   { id: 1, customer: "Alice", items: ["coffee", "cake"], total: 8 },
//   { id: 2, customer: "Bob", items: ["tea"], total: 3 },
//   { id: 3, customer: "Alice", items: ["sandwich", "coffee"], total: 10 },
//   { id: 4, customer: "Charlie", items: ["cake"], total: 4 },
// ];
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