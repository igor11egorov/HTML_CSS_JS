// Задание 1.

// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

const url = 'https://jsonplaceholder.typicode.com/users'

render()

function fetchData(url) {
  return fetch(url).then((res) => res.json())
}

function render() {
  fetchData(url).then((data) => {
    const containerCardsEl = document.querySelector('.container-card')
    containerCardsEl.innerHTML = ''

    if (data && Array.isArray(data)) {
      data.forEach((item) => {
        containerCardsEl.insertAdjacentHTML(
          'beforeend',
          `
            <div class="card">
                <p>№: <b>${item.id}</b></p>
                <p>Name: <b>${item.username}</b></p>
                <p>Email: <b>${item.email}</b></p>
                <p>City: <b>${item.address.city}</b></p>
                <p>Phone: <b>${item.phone}</b></p>
                <p>Company: <b>${item.company.name}</b></p>
            </div> 
            `,
        )
      })
    }
  })
}
