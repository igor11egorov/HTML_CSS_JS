//Выполнит заданное в коллбек функции спустя заданное время
// console.log(1);

// setTimeout(() => {
//     console.log('hello world ')
// }, 3000)
// let count = 0

// console.log(2);

//setInterval - будет работать пока не встретит условие завершение, которое надо реализовать через clearInterval()
// const interval = setInterval(() => {
//     count++
//     console.log(count)
//     if(count === 5) {
//         clearInterval(interval)
//     }
// }, 1000)

//PROMISE возвращает всегда PROMISE, а сам по себе является ОБЪЕКТОМ
const p1 = new Promise((res, rej) => {
  if (5 === 5) {
    res('p1.res: hello world')
  } else {
    rej('p1.rej: error')
  }
})

console.log('p1.promise', p1)
//промисс надо всегда обрабатвать
//then - обрабатывает успех промисса
p1.then((result) => {
  console.log('p1.then', result)
})
  //catch - отрабатывает если промис возвращает ошибку
  .catch((err) => {
    console.error('p1.catch', err)
  })
  //finally - всегда выполнится независимо от успеха или ошибки промисса
  .finally(() => {
    console.log('p1.finally: loader was collapsed')
  })

// Создать промис, в условии проверить что какая нибудь строка const str = ‘hello world’ длиннее 5 и обработать через then catch finally
// Создать промис проверить что 3 === 3
const p2 = new Promise((resolve, reject) => {
  if (3 === 3) {
    resolve('p2.res: hello')
  } else {
    reject('p2.rej: error')
  }
})

p2.then((result) => console.log('p2.then', result))
  .catch((err) => console.log('p2.catch', err))
  .finally(() => console.log('p2.finally: super'))

const str = 'hello world'
const p3 = new Promise((resolve, reject) => {
  if (str.length < 5) {
    resolve('p3.res: success')
  } else {
    reject('p3.rej: fail')
  }
})

p3.then((result) => {
  console.log('p3.then', result)
})
  .catch((err) => {
    console.log('p3.catch', err)
  })
  .finally(() => {
    console.log('p3.finally: that was easy')
  })

const p4 = new Promise((res, rej) => {
  if (str) {
    res('p4.res: OK')
  } else {
    rej('p4.rej: ERROR')
  }
})

p4.then((res) => {
  console.log('p4.then', res)
})
  .catch((e) => {
    console.log('p4.catch', e)
  })
  .finally(() => {
    console.log('p4.finally: HEHE')
  })

function pfn(msg, isActivated) {
  return new Promise((res, rej) => {
    if (isActivated) {
      res(msg)
    } else {
      rej('error')
    }
  })
}

// Задача
// Условие:
// Создай промис, который всегда резолвится строкой "OK" и выведи результат в консоль.
// Ожидаемый вывод:
// OK
const p5 = new Promise((res, rej) => {
  res('p5.res: OK')
})

p5.then((res) => console.log('p5.then', res)).catch((err) =>
  console.log('p5.catch', err),
)

// Задача 2 — всегда reject
// Условие:
// Создай промис, который всегда реджектится строкой "ERROR" и обработай ошибку через catch.
// Ожидаемый вывод:
// ERROR
const p6 = new Promise((res, rej) => {
  rej('p6:rej: ERROR')
})

p6.then((res) => console.log('p6.then', res)).catch((err) =>
  console.log('p6.catch', err),
)

// Задача 3 — условие внутри промиса
// Условие:
// Создай промис, который:
// если true → resolve('success')
// если false → reject('fail')
// Значение условия задай внутри промиса.
const p7 = new Promise((res, rej) => {
  const condition = true
  if (condition) {
    res('p7.res: success')
  } else {
    rej('p7.rej: fail')
  }
})

p7.then((res) => console.log('p7.then', res)).catch((err) =>
  console.log('p7.catch', err),
)

// Задача 4 — then меняет значение
// Условие:
// Создай промис, который резолвится строкой "hello"
// В then верни строку "hello world" и выведи её.
// Ожидаемый вывод:
const p8 = new Promise((res, rej) => {
  res('p8.res: hello')
})

p8.then((res) => console.log('p8.then: hello world')).catch((err) =>
  console.log('p8.catch', err),
)

// Фильтрация активных пользователей
// Дан массив:
// Задача: напиши функцию getActiveNames(users) которая возвращает new Promise.
// Если users.length === 0 → reject('empty')
// Иначе → resolve([...имена активных...]) (массив строк)
// Снаружи:
// в then вывести массив
// в catch вывести ошибку
// в finally вывести "DONE"

const users = [
  { id: 1, name: 'Ann', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Kate', active: true },
]

const getActiveNames = (users) => {
  return new Promise((res, rej) => {
    if (users.length === 0) {
      rej('users: empty')
    } else {
      res(users.filter((user) => user.active))
    }
  })
}

getActiveNames(users)
  .then((res) => console.log('users:', res))
  .catch((err) => console.log('users:', err))
  .finally(() => console.log('users: DONE'))

// Найти пользователя по id (find)
// Есть массив users (как выше).
// Задача: функция findUserNameById(users, id) → Promise
// Если пользователь найден → resolve(name)
// Если нет → reject('not found')
// Проверь 2 вызова: один успешный, один с ошибкой.
const findUserNameById = (users, id) => {
  return new Promise((res, rej) => {
    const foundedUser = users.find((user) => user.id === id)
    if (foundedUser) {
      res(foundedUser.name)
    } else {
      rej('findUser: not found')
    }
  })
}

findUserNameById(users, 1)
  .then((res) => console.log('findUser (id = 1):', res))
  .catch((err) => console.log('findUser (id = 1):', err))

findUserNameById(users, 5)
  .then((res) => console.log('findUser (id = 5):', res))
  .catch((err) => console.log('findUser (id = 5):', err))

// Сумма покупок (reduce)
// Дан массив:
// Задача: функция calcTotal(cart) → Promise
// Если cart.some(item => item.qty <= 0) → reject('bad qty')
// Иначе → resolve(total) где total = sum(price * qty)
// Снаружи в then вывести total.

const cart = [
  { title: 'Milk', price: 6, qty: 2 },
  { title: 'Bread', price: 8, qty: 1 },
  { title: 'Cheese', price: 20, qty: 1 },
]

const calcTotal = (cart) => {
  return new Promise((res, rej) => {
    if (cart.some((item) => item.qty <= 0)) {
      rej('cart: bad qty')
    } else {
      res(
        cart.reduce((acc, product) => (acc += product.price * product.qty), 0),
      )
    }
  })
}

calcTotal(cart)
  .then((res) => console.log('cart:', res))
  .catch((err) => console.log('cart:', err))
