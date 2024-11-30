
let rangeInput = document.getElementById("range") 
let moodDiv = document.getElementById("mood")
let p = document.getElementById("RangePercent")

let MoodsList = ["Angry", "Semi-Angry", "Happy", "Love You"]

rangeInput.oninput = function() {
  if(rangeInput.value == 25) {
    moodDiv.innerHTML = MoodsList[0]
  } else if (rangeInput.value == 50 ) {
    moodDiv.innerHTML = MoodsList[1]
  } else if (rangeInput.value == 75) {
    moodDiv.innerHTML = MoodsList[2]
  } else if (rangeInput.value == 100) {
    moodDiv.innerHTML = MoodsList[3]
  } else if (rangeInput.value == 0) {
    moodDiv.innerHTML = ""
  }
  p.innerHTML = `${rangeInput.value}%`
}


