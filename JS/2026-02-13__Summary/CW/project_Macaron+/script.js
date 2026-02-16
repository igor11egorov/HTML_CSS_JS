const url = 'https://67d8614700348dd3e2a74a1c.mockapi.io/api/mach-17/cart'
const key = 'cartStorage'
let productsData = []

render()

document
  .querySelector('.container-card')
  .addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {
      const id = e.target.dataset.id
      const product = productsData.find((item) => item.id == id)
      let cart = getCart()
      if (cart && Array.isArray(cart)) {
        if (cart.find((item) => item.id === product.id)) {
          cart = cart.filter((item) => item.id !== product.id)
          saveCart(cart)
        } else {
          cart.push(product)
          saveCart(cart)
        }
      } else {
        saveCart([product])
      }
    }
  })

function fetchData(url) {
  return fetch(url).then((res) => res.json())
}

function getCart() {
  return JSON.parse(localStorage.getItem(key))
}

function saveCart(shoes) {
  localStorage.setItem(key, JSON.stringify(shoes))
}

function render() {
  fetchData(url).then((data) => {
    productsData = data

    const containerCardsEl = document.querySelector('.container-card')
    containerCardsEl.innerHTML = ''

    if (productsData && Array.isArray(productsData)) {
      productsData.forEach(({ name, image, price, id }) => {
        containerCardsEl.insertAdjacentHTML(
          'beforeend',
          `
            <div class="card">
                <div class="wrap-img">
                    <img src="${image}" alt="FOTO">
                </div>
                <div class="all-info-card">

                    <div class="description-card">
                        <h3>${name}</h3>
                        <p>Обувь высокого качества</p>
                    </div>

                    <div class="footer-card">
                        <h3>${price}</h3>
                        <div class="shop-cart">
                            <img src="./images/Group 3.png" alt="">
                            <p class="add-to-cart" data-id="${id}">В корзину</p>
                        </div>
                    </div>
                </div>
            </div> 
            `,
        )
      })
    }
  })
}
