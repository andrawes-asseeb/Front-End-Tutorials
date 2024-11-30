
// Random Quote 

let btn = document.getElementById("btn")
let p = document.getElementById("quote")
let span = document.createElement("span")

let QuotesList = [
  "To Be Good At Your Career You must Get Rid Of The Things That You Do Not Need It",
  "Keep Smiling, Because Life Is a Beautiful Thing And There’s So Much To Smile About",
  "Life Is A Long Lesson In humility",
  "In Three Words I Can Sum Up Everything I’ve Learned About Life: It Goes On", 
  "Love The Life  YOu Live", 
  "Life Is Either Daring Adventure Or Nothing At All"
]

let Names = ["Andrawes", "Mina", "Max", "Makarious", "Tomas", "Yassa"]

let i = 0;
btn.onclick = function() {
  if(i <= 5) {
    p.innerHTML = QuotesList[i]
    span.style.cssText = 'display: block; text-align: center; margin-top: 10px; font-family: cursive;'
    span.innerHTML = `"By ${Names[i]}"`
    p.appendChild(span)
    i++
    if(i > 5) {
      return i = 0; 
    }
  }  
}

/* 
--Search About the Importance of The Nested Condition
--The Important Of the Nested Condition Is that it Faster in returning something
--if you want to make a beautiful looping inside a function try to make a variable of number and 
Douple That variables by ++ in the code you make
*/