const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const leftButtonEL = document.querySelector('.left')
const rightButtonEl = document.querySelector('.right')
let count = 1

getPost(count)

leftButtonEL.addEventListener('click', () => {
  count > 1 ? count-- : (count = 100)
  getPost(count)
})

rightButtonEl.addEventListener('click', () => {
  count < 100 ? count++ : (count = 1)
  getPost(count)
})

async function getPost(numPost) {
  try {
    const res = await fetch(`${API_URL}/${numPost}`)
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    console.log('--post--', data)
    renderPost(data)
  } catch (error) {
    console.error('--Server error--', error)
  }
}

function renderPost(post) {
  const containerEl = document.querySelector('.container')
  containerEl.innerHTML = ''
  containerEl.insertAdjacentHTML(
    'beforeend',
    `
                 <div class="card">
                    <div class="wrap-content">
                        <p class="card-header">${post.title}</p>
                        <p class="card-content">${post.body}</p>
                    </div>
                    <div class="wrap-img">
                        <img src="./images/kpipiskalisaiyure.png" alt="">
                    </div>
                </div>
        `,
  )
}
