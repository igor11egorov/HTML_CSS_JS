// Задание 1
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.
const fetchTodos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!res.ok) {
      throw new Error('--error--', res.status)
    }
    const data = await res.json()
    console.log('--todos--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchTodos()

// Задание 2
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.
const fetchPosts = async (limit) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    )
    if (!res.ok) {
      throw new Error('--error--', res.status)
    }
    const data = await res.json()
    console.log('--posts--', data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}
fetchPosts(10)
