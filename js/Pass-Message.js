
// Pass-Message
let input = document.getElementById("inp")
let Submit = document.getElementById("sub")
let DeleteAll = document.getElementById("DeletAll") // try in the future to fix it
let AddedText = document.getElementById("pContainer")

Submit.onclick = function() {
  if(input.value !== "") {
    let createdP = document.createElement("p")
    let createdBtn = document.createElement("button")
    createdBtn.innerHTML = 'Delete'
    createdBtn.style.cssText = "position: absolute; right: 5px; font-size: 20px; padding: 10px; border: none; cursor: pointer;"
    createdP.style.cssText = "position: relative ;text-align: left; margin-left: 30px; padding-bottom: 20px; border-bottom: 2px solid cornflowerblue;"
    createdP.innerHTML = input.value
    AddedText.appendChild(createdP)
    createdP.appendChild(createdBtn)
    createdBtn.onclick = function() {
      createdP.remove()
    }
    if(AddedText.childNodes.length == 3) {
      DeleteAll.style.display = 'inline'
    }
    input.value = ""
  }
}

// This Codes Are for Deleting The AddedText Element
// one
DeleteAll.onclick= function () {
  while(AddedText.hasChildNodes()) {
    AddedText.removeChild(AddedText.firstChild)
  }
  DeleteAll.style.display= 'none'
}

// Two
// DeleteAll.onclick= function() {
//   AddedText.innerHTML = null
//   DeleteAll.style.display= 'none'
// }


// #####################################################################################################
// This Code With addEventListener() with Enter key

// input.addEventListener("keydown", function(event) {
//   if(event.key === "Enter") {
//     getMessage()
//   }
// })

// function getMessage() {
//     if(input.value !== "") {
//       let createdP = document.createElement("p")
//       let createdBtn = document.createElement("button")
//       createdBtn.innerHTML = 'Delete'
//       createdBtn.style.cssText = "position: absolute; right: 5px; font-size: 20px; padding: 10px; border: none; cursor: pointer;"
//       createdP.style.cssText = "position: relative ; text-align: left; margin-left: 30px; padding-bottom: 20px;"
//       createdP.innerHTML = input.value
//       AddedText.appendChild(createdP)
//       createdP.appendChild(createdBtn)
//       createdBtn.onclick = function() {
//         createdP.remove()
//       }
//       if(AddedText.childNodes.length == 3) {
//         DeleteAll.style.display = 'inline'
//       }
//       input.value = ""
//     }
//   }


/* 
--Sometimes The best Practice to add The Element to the parent element like this:
document.body.Parentelement.appendchild(element)
*/