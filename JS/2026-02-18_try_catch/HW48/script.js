// Задание 1
// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

const fetchPosts = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('--error--', res.status)
    }
    const data = await res.json()
    console.log('--posts--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchPosts('https://jsonplaceholder.typicode.com/posts?userId=1')
fetchPosts('https://jsonplaceholdert.typicode.com/posts?userId=1')

// Задание 2
// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.
const division = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('Division on 0')
    }
    return console.log(a / b)
  } catch (error) {
    console.log('--Error--:', error)
  }
}

division(9, 3)
division(3, 0)
