// ChatBot
let Container = document.getElementById('Cont');
let input = document.getElementById('inp');
let Btn = document.getElementById('SendBtn');
let i = 0

let Responses = [ 
  'Hi Man',
  'I Am Fine', 
  'me To Brother', 
  'I was home',
  'Ok See You Later'
]

Btn.addEventListener('click', function() {
  const date = new Date()

  let hr = date.getHours()
  let min = date.getMinutes()
  if(input.value !== '') {
    // Setting Variables
    let AiParagraph = document.createElement('p');
    let CreatedP = document.createElement('p');
    let CreatedSpan = document.createElement('span');
    let AnotherSpan = document.createElement('span');;
    // Settings The Styling
    CreatedP.innerText = input.value
    CreatedSpan.innerText = `${hr}:${min} ${hr < 12 ? 'AM' : 'PM'}`
    AnotherSpan.innerText = `${hr}:${min} ${hr < 12 ? 'AM' : 'PM'}`
    AiParagraph.style.cssText = 'background-color: yellow; align-self: end;'
    // The appending
    CreatedP.appendChild(CreatedSpan)
    Container.appendChild(CreatedP)
    // AI Respons 
      if(i == 0) {
        AiParagraph.innerText = Responses[i]
      } else if (i == 1) {
        AiParagraph.innerText = Responses[i]
      } else if (i == 2) {
        AiParagraph.innerText = Responses[i]
      } else if (i == 3) {
        AiParagraph.innerText = Responses[i]
      } else if (i == 4) {
        AiParagraph.innerText = Responses[i]
        i = -1
      }
    window.setTimeout(function() {
      AiParagraph.appendChild(AnotherSpan)
      Container.appendChild(AiParagraph)
    }, 2000)
    input.value = ''
    i++
  }
})
