// Keyboard 
let letters = document.querySelectorAll("button")
let screen = document.getElementById("screen-input")
let space = document.getElementById("space")
let lower = document.getElementById("lower")
let upper = document.getElementById("upper")

letters.forEach(function(ele) {
  ele.onclick = function() {
    screen.innerHTML += ele.innerHTML
  }
})

space.onclick = function() {
  screen.innerHTML += ' '
}

lower.onclick = function () {
  letters.forEach(function(el) {
    el.style.textTransform = 'lowercase'
  })
  document.body.style.textTransform = 'lowercase'
  lower.style.zIndex = '-1'
  upper.style.zIndex = '1'
}

upper.onclick = function () {
  letters.forEach(function(el) {
    el.style.textTransform = 'uppercase'
  })
  document.body.style.textTransform = 'uppercase'
  lower.style.zIndex = '1'
  upper.style.zIndex = '-1'
}
