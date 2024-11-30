
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let parent = document.getElementById("parent");
let span = document.querySelectorAll('.span');
let minNum = 0

rightArrow.onclick = function() {
  leftArrow.style.zIndex = '1'
  if(minNum !== -600) {
    minNum = minNum + -200
    parent.style.cssText = `left:${minNum}px`
  }
}

leftArrow.onclick = function() {
  if(minNum !== 0) {
    minNum = minNum + 200
    parent.style.cssText = `left:${minNum}px`
  }
}

span.forEach(function(ele) {
  ele.onclick = function(e) {
    span.forEach(function(ele) {
      ele.classList.remove("active")
    })
    e.target.classList.add("active")
  }
})

