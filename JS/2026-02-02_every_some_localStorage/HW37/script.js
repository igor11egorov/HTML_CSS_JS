// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const products = [
  { name: 'Apple', price: 30 },
  { name: 'Banana', price: 15 },
  { name: 'Orange', price: 25 },
  { name: 'Milk', price: 40 },
  { name: 'Bread', price: 20 },
  { name: 'Cheese', price: 50 },
  { name: 'Coffee', price: 45 },
  { name: 'Tea', price: 18 },
  { name: 'Sugar', price: 12 },
  { name: 'Chocolate', price: 35 },
]

const hasExpensiveItem = (arr) => arr.some(item => item.price > 50)

console.log(hasExpensiveItem(products));