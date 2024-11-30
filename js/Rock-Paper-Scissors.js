
const StartBtn = document.getElementById('start')
const ComputerChoices = Array.from(document.querySelectorAll('.choices-1 > span'))
const UserChoices = Array.from(document.querySelectorAll('.choices-2 > span'))

let ComputerInput = document.getElementById('computer-Input')
let UserInput = document.getElementById('user-Input')
let Result = document.getElementById('result')
let Timer = document.getElementById('timer')

let bool = true;
let interval;
let num = 0;
StartBtn.addEventListener('click', function() {
  if(bool) {
    StartBtn.innerText = 'Reload'

    UserChoices.forEach(function(ele) {
      ele.onclick = function() {
        if(num == 0) {
          UserInput.innerText = ele.innerText
          num++
        }
      }
    }) 

    interval = setInterval(function() {
      Timer.innerText--
      if(Timer.innerText == 0) {
        ComputerInput.innerText = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)].innerText
        
        if(ComputerInput.innerText == UserInput.innerText) {
          Result.innerText = 'Withdraw'
        } else if (ComputerInput.innerText == 'Rock' && UserInput.innerText == 'Paper') {
          Result.innerText = 'You Win'
        } else if (ComputerInput.innerText == 'Paper' && UserInput.innerText == 'Rock') {
          Result.innerText = 'You Lose'
        } else if (ComputerInput.innerText == 'Rock' && UserInput.innerText == 'Scissor') {
          Result.innerText = 'You Lose'
        } else if (ComputerInput.innerText == 'Scissor' && UserInput.innerText == 'Rock') {
          Result.innerText = 'You Win'
        } else if (ComputerInput.innerText == 'Paper' && UserInput.innerText == 'Scissor') {
          Result.innerText = 'You Win'
        } else if (ComputerInput.innerText == 'Scissor' && UserInput.innerText == 'Paper') {
          Result.innerText = 'You Lose'
        }

        if(Result.innerText == 'You Lose') {
          Result.style.color = 'red'
        } else if (Result.innerText == 'You Win') {
          Result.style.color = 'green'
        } else if (Result.innerText == 'Withdraw') {
          Result.style.color = 'yellow'
        }
        clearInterval(interval)
      }
    }, 1000)

    bool = false
  } else {
    window.location.reload()
  }
})