
// Random-Background-color 

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// let string = ''

// for(let i = 1; i <= 6; i++) {
//   string += (arr[Math.floor(Math.random() * arr.length)])
// }

// console.log('#' + string)

// ###################################################

// this is by me
let btn = document.getElementById("btn")
let box = document.getElementById("box-Color")
let hex = document.getElementById("hex-Code")

btn.onclick = function () {
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let string = ''

for(let i = 1; i <= 6; i++) {
  string += (arr[Math.floor(Math.random() * arr.length)])
}
  box.style.backgroundColor = `#${string}`
  hex.innerHTML = `#${string}`
}

/*
FOCUS about diffrence between the append() & the innerHTML?
-- append(): will append the value to the old value and again and again
-- innerHTML: will replace the old value with the new one
-- in the console the innerHTML wont work because the console it typing the new values in new lines
*/