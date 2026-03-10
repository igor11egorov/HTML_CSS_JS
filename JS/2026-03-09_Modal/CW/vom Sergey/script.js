const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

modal.addEventListener('click', ({target}) => {
    if (target === modal) {
        modal.style.display = 'none';
    }
})

async function asyncRequest(url, method, data) {
const options = {
method,
headers: {
'Content-Type': 'application/json; charset=UTF-8',
}
};

if (data && method !== 'GET') {
options.body = JSON.stringify(data);
}

const res = await fetch(url, options);

if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}

return await res.json();
}

async function getNewCat() {
    try {
        const response = await asyncRequest("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", 'GET')
        renderCat(response)
    } catch (error) {
        console.error(error)
    }
    
}

function renderCat(response) {
    const content = document.querySelector('.modal-content')
    content.innerHTML = ''
    content.insertAdjacentHTML("afterbegin", `<div class="image">
                <img src="${response[0].url}" alt="cat" style="width:347px; height:310px">
            </div>
            <div class="text">
                <p>Id котика: ${response[0].id}</p>
                <p>Имя котика: Вася</p>
            </div>`)
}

const newCat = document.querySelector('#newCat')

newCat.addEventListener('click', getNewCat)