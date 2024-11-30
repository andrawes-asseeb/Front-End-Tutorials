// To Be Completed


// initilizing variables
const btn = document.getElementById('button');
const container = document.createElement('div')
let newBtn = document.createElement('button');

// making some cutoms
newBtn.innerText = 'X'
newBtn.className = 'exit'
newBtn.style.cssText = 'width: 0; height: 0; border: none;'

btn.addEventListener('click', function() {
  this.style.cssText = 'width: 0;';

  setTimeout(() => {
    this.remove()
    window.document.body.appendChild(newBtn)
  }, 500);

  setTimeout(() => {
    newBtn.style.cssText = ' width: 50px; border: 1px solid white;'
  }, 1000)  
})

newBtn.addEventListener('click', function() {
  this.style.cssText = 'width: 0; border: none;'

  setTimeout(() => {
    this.remove()
    document.body.appendChild(btn)
  }, 500);

  setTimeout(() => {
    btn.style.cssText = ' width: 50px;'
  }, 1000)  

})