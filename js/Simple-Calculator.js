// Very Simple Calculator
let inputOne = document.getElementById("First-number")
let inputTwo = document.getElementById("second-number")
let Operation = document.getElementById("opetation")
let btn = document.getElementById("btn")
let result = document.getElementById("Result")

btn.onclick = function () {
  if(Number(inputOne.value) && Number(inputTwo.value)) {
    if(Operation.value == "*") {
      let mult = inputOne.value * inputTwo.value
      result.innerHTML = mult
    } else if (Operation.value == "-") {
      let sub = inputOne.value - inputTwo.value
      result.innerHTML = sub
    } else if (Operation.value == "÷") {
      let div = inputOne.value / inputTwo.value
      result.innerHTML = div
    } else if (Operation.value == "+") {
      let add = Number(inputOne.value) + Number(inputTwo.value)
      result.innerHTML = add
    } else if (Operation.value == "%") {
        let Per = inputOne.value % inputTwo.value
        result.innerHTML = Per
    } else {
      result.innerHTML = "Error => Enter only Sypmples => [ + or * or ÷ or - or % ] in input Three"
    }
  } else {
    result.innerHTML =  "Error => Enter only Numbers in Input One Or Two"
  }
}

