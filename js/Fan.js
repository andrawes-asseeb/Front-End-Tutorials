
let on = document.getElementById('start');
let off = document.getElementById('stop');
let fan = document.getElementById('fan');
let increase = document.getElementById('increase');
let reduce = document.getElementById('reduce');
let para = document.querySelector('p');
let time = 4
let i = 1

on.onclick = function() {
  fan.style.cssText = `animation: rotating infinite ${time}s linear;`
}

off.onclick = function() {
  fan.style.animationPlayState = `paused`
}

increase.onclick = function() {
  if(time !== 1) {
    time--
    fan.style.animationDuration = `${time}s`
    i++
    para.innerText = i
  }
}

reduce.onclick = function() {
  if(time < 4) {
    time++
    fan.style.animationDuration = `${time}s`
    i--
    para.innerText = i
  }
}