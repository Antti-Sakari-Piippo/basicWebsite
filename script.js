const menu = document.getElementById('menu')
const menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', function onClick() {
  menu.classList.toggle('open')
  console.log('first')
})
