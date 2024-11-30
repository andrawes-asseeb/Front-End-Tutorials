
const show = document.getElementById('show')
const password = document.getElementById('pass')
const Lis = document.querySelectorAll('.li li')
const icons = document.querySelectorAll('.li i')

let = []

show.addEventListener('click', function() {
  // changing the type of the password
  password.type = password.type === 'password' ? 'text' : 'password'
  // changing the className of the icon
  show.className = `fa-solid fa-eye${password.type === 'password' ? '': '-slash'}`
})
