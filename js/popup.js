
console.time() // this is to calculate the time to run this code 

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  const createdHeading = document.createElement('h1')
  const createdP = document.createElement('p');
  const createdBreak = document.createElement('br');
  const createdButton = document.createElement('button');
  const createdDiv = document.createElement("div");
  
  createdDiv.className = 'parent'
  createdHeading.innerText = 'Thank You!'
  createdP.innerText = `Your details have been successfully`
  createdButton.innerText = 'OK'
  
  document.body.appendChild(createdDiv);
  createdDiv.appendChild(createdHeading);
  createdDiv.appendChild(createdP);
  createdDiv.appendChild(createdButton);
  createdP.appendChild(createdBreak)
  createdP.innerText += ` submitted. Thanks!`
  
  createdDiv.style.cssText = 'height: 350px; width: 350px; transform: translate(-50%, -50%); top: 50%;'

  createdButton.onclick = function () {
    // createdDiv.style.cssText = 'transition: 0s; top: -50px; transform: translateX(-50%); width: 10px; height: 10px;'
    createdDiv.remove()
  }

})

console.timeEnd()
