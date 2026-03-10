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

const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    const img = document.querySelector('.img');
    getNewCat()

})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

modal.addEventListener('click', ({target}) => {
    if (target === modal) {
        modal.style.display = 'none';
    }
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form[0].value;
    const phone = form[1].value;
    const email = form[2].value;
    const company = form[3].value;

    const list = document.querySelector('.list')

    list.innerHTML += `
        <div>
            <p> Name: ${name}</p>
            <p> Phone: ${phone}</p>
            <p> Email: ${email}</p>
            <p> Company: ${company}</p>
        </div>
       
    `
    form.reset()
   modal.style.display = 'none';
})

async function getNewCat() {
    try {
        const response = await asyncRequest(
            'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
            'GET')
        console.log(response)
        renderCat(response)
    } catch (e) {
        console.error(e)
    }
}


function renderCat(response) {
    const img = document.querySelector('.image')
    img.innerHTML = ''
    let ew = `
            <img src=${response[0].url} alt="image" style="width: 347px;height: 310px">
    `
    img.insertAdjacentHTML('afterbegin', ew);
}

