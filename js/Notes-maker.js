// Notes maker 

// Main Variables 
let parentElement = document.getElementById('parent')
let notesParent = document.getElementById('notes');
let btn = document.getElementById('btn');

// Number for Looping 
let num = 1;
// Set The Date for the notes 
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// Activating the first button  
btn.onclick = function() {
  btn.disabled = true
  btn.style.cursor = 'inherit'
  // Creating the variables
  let containerDiv = document.createElement('div');
  let createdTextarea = document.createElement('textarea');
  let createdBtn = document.createElement('button');
  let createdspan = document.createElement('span');
  let DeleteButton = document.createElement('button');
  // setting the styling & Adding Some Texts
  containerDiv.className = 'TextArea-Container'
  createdBtn.innerText = 'Add'
  createdspan.innerText = `${day}/${month}/${year}`
  createdspan.style.cssText = ' position: absolute; bottom: 0px; right: 0px; padding: 5px;'
  containerDiv.style.cssText = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)'
  createdBtn.style.cssText = '  display: block; width: 100px;'
  createdTextarea.style.cssText = 'width: 300px; height: 250px; border: none; outline: none; padding: 10px; font-size: 20px; resize: none;'
  DeleteButton.innerText = 'Delete'
  DeleteButton.classList.add('btn')
  // appending the children
  containerDiv.appendChild(createdTextarea)
  containerDiv.appendChild(createdBtn)
  parentElement.appendChild(containerDiv)
  // Activating the Add Button
  createdBtn.onclick = function() {
    btn.disabled = false
    btn.style.cursor = 'pointer'
    let createdP = document.createElement('p');
    if(createdTextarea.value !== '') {
      createdP.innerText = createdTextarea.value
      if(num % 2) {
        createdP.style.cssText = 'transform: rotate(-8deg); background-color: yellow'
      }
      createdP.appendChild(createdspan)
      createdP.appendChild(DeleteButton)
      notesParent.appendChild(createdP)
    }
    num++
    containerDiv.remove()
    // Activating The Delete Button 
    DeleteButton.onclick = function() {
      createdP.remove()
    } 
  }
  
}



