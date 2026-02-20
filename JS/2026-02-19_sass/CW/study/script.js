const API_KEY = 'https://jsonplaceholder.typicode.com/posts'

const container = document.querySelector('.container')

let posts = []

const fetchPosts = async () => {
  try {
    const res = await fetch(API_KEY)
    if (!res.ok) throw new Error('--error--', res.status)
    const data = await res.json()
    posts = data
  } catch (error) {
    console.error('--Server error--', error)
  }
  renderPosts()
}

function createPostItem(post) {
  container.insertAdjacentHTML(
    'beforeend',
    `
        <div class="container__item">
            <p>${post.title}</p>
            <p>${post.body}</p>
        </div>
        `,
  )
}

function renderPosts() {
  container.innerHTML = ''
  posts.forEach((post) => {
    createPostItem(post)
  })
}

fetchPosts()
