// Задание: реализовать меню таким образом, что по дефолту меню будет скрыто, при нажатии на кнопку или
// любую часть меню - оно открывается. иконка должна замениться на крестик, а при нажатии куда угодно кроме меню
// меню должно схлопнуться (collapsed) либо при нажатии на крестик, сам крестик сменится на иконку с правого десктопа

const closeBtnEl = document.querySelector('#close')
const openBtnEl = document.querySelector('#open')
const menuCollapsedEl = document.querySelector('.menu-collapsed')
const menuOpenedEl = document.querySelector('.menu-opened')

document.addEventListener('click', ({ target }) => {
  if (menuOpenedEl.classList.contains('hidden')) {
    if (menuCollapsedEl.contains(target)) toggle()
    return
  }

  if (!menuOpenedEl.classList.contains('hidden')) {
    if (target === closeBtnEl || !menuOpenedEl.contains(target)) toggle()
    return
  }
})

function toggle() {
  menuOpenedEl.classList.toggle('hidden')
  menuCollapsedEl.classList.toggle('hidden')
}
