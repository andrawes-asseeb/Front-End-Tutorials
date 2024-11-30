// Math for kids
let ArrayTaps = Array.from(document.querySelectorAll(".taps li"));
let ArrayProcess = Array.from(document.querySelectorAll(".process > div"));
let ArrayOperatons = Array.from(document.querySelectorAll(".operations > div"));

ArrayTaps.forEach(ele => {
  ele.addEventListener('click', function(e) {

    // looping on the processes
    ArrayProcess.forEach(process => {
      process.style.display = 'none'
    })
    // looping on the Operations
    ArrayOperatons.forEach(operation => {
      operation.style.display = 'none'
    })
    
    document.querySelector(e.currentTarget.dataset.con).style.display = 'block'
    document.querySelector(e.currentTarget.dataset.op).style.display = 'block'

    let selectedProcess = Array.from(document.querySelector(e.currentTarget.dataset.con).children)
    let selectedOperations = Array.from(document.querySelector(e.currentTarget.dataset.op).children)

    // these bunsh of codes for making random numbers with random results 
    let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let numOne = Math.ceil(Math.random() * arrayOfNumbers.length)
    let numTwo = Math.ceil(Math.random() * arrayOfNumbers.length)

    selectedProcess[0].innerText = numOne
    selectedProcess[2].innerText = numTwo
    selectedOperations[Math.floor(Math.random() * selectedOperations.length)].innerText = eval(`${numOne} ${selectedProcess[1].innerText} ${numTwo}`)

    selectedOperations.forEach(function (eleOp) {
      eleOp.onclick = function() {
        let temp = eleOp.style.backgroundColor
        if(eval(`${selectedProcess[0].innerText} ${selectedProcess[1].innerText} ${selectedProcess[2].innerText}`) == eval(`${eleOp.innerText}`)) {
          selectedProcess[4].innerText = eleOp.innerText
          eleOp.style.cssText = `background-color: #04d004`
          setTimeout(function() {
            eleOp.style.cssText = `background-color: ${temp}`
          }, 1000)
          eleOp.style.cssText = `background-color: #04d004`
        } else {
          eleOp.style.cssText = 'background-color: red'
          setTimeout(function() {
            eleOp.style.cssText = `background-color: ${temp}`
          }, 1000)
        }
      }
    })

    selectedProcess[4].innerText = '?'
  })  
})

let selectedProcess = Array.from(document.querySelector('.Add').children)
let selectedOperations = Array.from(document.querySelector('.AddOp').children)

selectedOperations.forEach(function (eleOp) {
  eleOp.onclick = function() {
    let temp = eleOp.style.backgroundColor
    if(eval(`${selectedProcess[0].innerText} ${selectedProcess[1].innerText} ${selectedProcess[2].innerText}`) == eval(`${eleOp.innerText}`)) {
      selectedProcess[4].innerText = eleOp.innerText
      eleOp.style.cssText = `background-color: #04d004`
      setTimeout(function() {
        eleOp.style.cssText = `background-color: ${temp}`
      }, 1000)
      eleOp.style.cssText = `background-color: #04d004`
    } else {
      eleOp.style.cssText = 'background-color: red'
      setTimeout(function() {
        eleOp.style.cssText = `background-color: ${temp}`
      }, 1000)
    }
  }
})