// Необходимо сделать запрос к API и получить данные об альбоме(albums) по его идентификатору. Используйте fetch для получения данных. Обработайте возможные ошибки с помощью try/catch. Используем https://jsonplaceholder.typicode.com/albums.
// Получить данные об 1, 7 и 12 альбоме и все полученную информацию используйте для отрисовки карточек на веб странице.
const API_KEY = 'https://jsonplaceholder.typicode.com/albums/'

const container = document.querySelector('.container')

let albums = []

const fetchAlbums = async (ids) => {
  try {
    const req = ids.map((id) => fetch(API_KEY + id))
    const res = await Promise.all(req)
    albums = await Promise.all(res.map((res) => res.json()))
    renderAlbums()
  } catch (error) {
    console.error('--Server error--', error)
  }
}

function createAlbumItem(album) {
  container.insertAdjacentHTML(
    'beforeend',
    `
        <div class="container__item">
            <p>userId: ${album.userId}</p>
            <p>id: ${album.id}</p>
            <p>title: ${album.title}</p>
        </div>
        `,
  )
}

function showLoading() {
  container.insertAdjacentHTML(
    'beforeend',
    `
        <div class="container__item">
            LOADING...
        </div>
        `,
  )
}

function renderAlbums() {
  container.innerHTML = ''
  albums.forEach((album) => {
    createAlbumItem(album)
  })
}

function delay(ms) {
  showLoading()
  setTimeout(() => {
        fetchAlbums([1, 7, 12])
    }, ms)
}

delay(2000)

// Необходимо задержать выполнение функции на 2 секунды с помощью setTimeout. Используйте async/await для выполнения этой задержки.

// Необходимо написать функцию parseJSON, которая должна распарсить строку '{"name": "John", "age": 30}' в формате JSON. Обработайте возможные ошибки с помощью try/catch.

// Необходимо создать функцию getRandomNumber, которая возвращает промис, который будет возвращать случайное число с задержкой в 1 секунду, таким образом мы имитируем некоторый процесс обрабатывающий логику генерации случайного числа. Используйте async/await для ожидания выполнения промиса. Не забудьте обработать асинхронный вызов функции.

// Необходимо получить HTML-код веб-страницы по ее URL и распарсить его для извлечения нужной информации Например Title. Используйте fetch для загрузки HTML и DOMParser для парсинга. Выполняем вместе с преподавателем. Для выполнения данного задания может потребоваться расширение google chrome CORS Unblock.
