const sidebar=document.querySelector('.menu')
const openBtn=document.querySelector('.open-btn')
const closeBtn=document.querySelector('.close-btn')
const body=document.querySelector('body')
const overlay=document.querySelector('.overlay')

function openMenu(){
body.classList.add('sidebar-open')
}
function closeMenu(){
body.classList.remove('sidebar-open')
}

const isMenuOpen=()=>body.classList.contains('sidebar-open')

closeBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
closeMenu()
})

overlay.addEventListener('click',()=>{
    closeMenu()
})

openBtn.addEventListener('click', (e)=>{
e.stopPropagation()
   openMenu() 
})

sidebar.addEventListener('click', ()=>{
if(!isMenuOpen()){
    openMenu()
}
})