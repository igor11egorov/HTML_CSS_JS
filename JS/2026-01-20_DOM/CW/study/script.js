const paragraphs = document.querySelectorAll('.paragraph')
const paragraphs2 = document.getElementsByTagName('p')
const paragraphUniq = document.getElementById('uniq')

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = 'Text from JS'
  console.log(paragraphs[i])
}

paragraphUniq.textContent = 'Text from JS for uniq'

for (let i = 0; i < paragraphs2.length; i++) {
  console.log(paragraphs2[i])
}

// Создайте HTML-страницу с изображением <img>. Используя setAttribute, измените атрибут src изображения на другой URL.".

img = document.querySelector('img')
img.setAttribute(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhO-wf_HBhn0ZpksMm3P3hJ-fLmIofs3u1w&s'
)

// Создайте HTML-страницу с элементом <span>. С использованием textContent или innerText, измените содержимое элемента на текущую дату.

text = document.querySelector('.text')
text.textContent = new Date()

// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

// см.домашку

// Создайте кнопку с текстом "Нажми меня" и добавьте её на вашу веб-страницу внутри элемента с идентификатором "myDiv".

// const btn = document.createElement();

// Создайте список (например, ul) и добавьте в него три элемента списка (li) с текстом "Пункт 1", "Пункт 2", "Пункт 3". Затем добавьте этот список на вашу веб-страницу (Делаем с преподавателем). Можно попробовать использовать циклы.

const list = document.querySelector('.list');
console.log(list);

for (let i = 0; i < 3; i++) {
  let itemLi = document.createElement('li');
  itemLi.textContent = `Пункт ${i + 1}`
  list.append(itemLi)
}
// Создайте новый элемент изображения (img) и установите ему атрибут src с ссылкой на изображение. Далее добавьте это изображение на вашу веб-страницу. Изображение может быть любым.


