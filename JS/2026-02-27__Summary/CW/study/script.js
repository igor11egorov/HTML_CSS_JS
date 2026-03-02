// Задача — Мини-приложение “Онлайн магазин”
// Нужно реализовать небольшую OOP-модель магазина с активным использованием map и filter.

// Требуется реализовать классы:
// 1) Product
// Свойства:
// id
// title
// price
// category
// inStock (boolean)
// Метод:
// getInfo() — возвращает строку с информацией о товаре
class Product {
  constructor(id, title, price, category, inStock) {
    this.id = id
    this.title = title
    this.price = price
    this.category = category
    this.inStock = inStock
  }
  getInfo() {
    console.log(
      `id: ${this.id}, title: ${this.title}, price: ${this.price}, category: ${this.category}, inStock: ${this.inStock}`,
    )
  }
}
// 2) Cart
// Свойства:
// items (массив товаров)
// Методы:
// addProduct(product) — добавить товар
// removeProduct(id) — удалить товар по id
// getTotal() — общая стоимость корзины
// getTitles() — вернуть массив названий товаров (использовать map)
// getAvailable() — вернуть только товары в наличии (использовать filter)
// getByCategory(category) — вернуть товары по категории (filter)
class Cart {
  constructor(items) {
    this.items = items
  }
  addProduct(product) {
    if (product instanceof Product) {
      this.items.push(product)
    } else {
      console.error('ERROR')
    }
  }
  removeProduct(id) {
    this.items = this.items.filter((item) => item.id !== id)
  }
  getTotal() {
    return this.items.reduce((acc, item) => (acc += item.price), 0)
  }
  getTitles() {
    return this.items.map((item) => item.title)
  }
  getAvailable() {
    return this.items.filter((item) => item.inStock)
  }
  getByCategory(category) {
    return this.items.filter((item) => item.category === category)
  }
}
// 3) Store
// Свойства:
// products (массив всех товаров)
// Методы:
// search(query) — поиск товаров по названию (filter)
// getCheapProducts(price) — товары дешевле указанной цены (filter)
// getCategories() — список уникальных категорий (map + Set)
// getProductsInfo() — массив строк с info по всем товарам (map)
class Store {
  constructor(products) {
    this.products = products
  }
  search(query) {
    return this.products.filter((product) => product.title === query)
  }
  getCheapProducts(price) {
    return this.products.filter((product) => product.price <= price)
  }
  getCategories() {
    const set = new Set()
    this.products.forEach((product) => {
      set.add(product.category)
    })
    return [...set]
  }
  getProductsInfo() {
    return this.products.map((product) => product.getInfo())
  }
}

const product1 = new Product(1, 'iPhone 15', 999, 'Electronics', true)
const product2 = new Product(2, 'MacBook Air', 1299, 'Electronics', true)
const product3 = new Product(3, 'Office Chair', 199, 'Furniture', false)
const product4 = new Product(4, 'Running Shoes', 120, 'Sport', true)
const product5 = new Product(5, 'Coffee Machine', 250, 'Home Appliances', false)

product3.getInfo()

const cart = new Cart([product1, product2, product3, product4])
cart.addProduct(product5)
// cart.removeProduct(5)
console.log(cart)
const total = cart.getTotal()
console.log(total)
console.log(cart.getTitles())
console.log(cart.getAvailable())
console.log(cart.getByCategory('Electronics'))

const store = new Store([product1, product2, product3, product4, product5])
console.log(store.search('Coffee Machine'))
console.log(store.getCheapProducts(200))
console.log(store.getCategories())
store.getProductsInfo()
// Задача — Система избранного (Favorites)
// Реальная практика: избранное товаров / статей / вакансий.

// Реализовать 2 класса.
// 1) Item
// Свойства:
// id
// title
// type (например: "article", "product", "video")
// Метод:
// getLabel() — возвращает строку: "type: title"
class Item {
  constructor(id, title, type) {
    this.id = id
    this.title = title
    this.type = type
  }
  getLabel() {
    return `${this.type}: ${this.title}`
  }
}
// 2) Favorites
// Свойства:
// items (массив Item)
// Методы:
// add(item) — добавить в избранное (если уже есть id — не добавлять)
// remove(id) — удалить из избранного
// getAllTitles() — массив названий (map)
// getByType(type) — вернуть элементы по типу (filter)
// has(id) — есть ли элемент в избранном (some)
class Favorites {
  constructor(items) {
    this.items = items
  }
  add(item) {
    if (item instanceof Item) {
      if (!this.has(item.id)) {
        this.items.push(item)
      }
      return this.items
    } else {
      console.error('ERROR')
    }
  }
  has(id) {
    return this.items.some((item) => item.id === id)
  }
  remove(id) {
    this.items = this.items.filter((item) => item.id !== id)
  }
  getAllTitles() {
    return this.items.map((item) => item.title)
  }
  getByType(type) {
    return this.items.filter((item) => item.type === type)
  }
}

const item1 = new Item(1, 'iPhone 15', 'electronics')
const item2 = new Item(2, 'Samsung TV', 'electronics')
const item3 = new Item(3, 'Office Chair', 'furniture')
const item4 = new Item(4, 'Dining Table', 'furniture')
const item5 = new Item(5, 'Running Shoes', 'sport')
const item6 = new Item(6, 'Tennis Racket', 'sport')
const item7 = new Item(7, 'Coffee Machine', 'appliance')
const item8 = new Item(8, 'Blender', 'appliance')

const favorites = new Favorites([
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
])
console.log(favorites.add(item8))
// favorites.add(item8)
// console.log(favorites);
