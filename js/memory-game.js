
const mainParent = document.getElementById('parent')
const parent = document.querySelectorAll('#parent #box')
const btn = document.getElementById('btn')
const main = document.querySelector('main');

// solve it in the future 
// const listOfItems = [...parent]
// var shuffle = listOfItems.sort(() => (Math.random() > .5) ? 2 : -1) // to make the items of the boxes goes randomely


let count = 0;
let stopCount = 2;
let arr = [];

parent.forEach(ele => {
  ele.onclick = function(e) {
    if(count < stopCount) {
      ele.style.cssText = 'transform: rotateY(180deg);'
      // for not adding the target that has an img to the arr and not adding the count Either
      if(!e.target.hasAttribute('src')) {
        count++
        arr.push(ele)
      }
      if(count % 2 == 0) {
        if(arr[0].innerHTML == arr[1].innerHTML) {
          setTimeout(function() {
            arr[0].style.cssText = 'opacity: -1;'
            arr[1].style.cssText = 'opacity: -1;'
            setTimeout(function() {
              arr[0].style.cssText = 'z-index: -1'
              arr[1].style.cssText = 'z-index: -1'
              arr = []
            }, 500)
          }, 800)
          stopCount += 2
        } else {
          setTimeout(function() {
            arr[0].style.cssText = 'transform: rotateY(0deg);'
            arr[1].style.cssText = 'transform: rotateY(0deg);'
            arr = []
            count -= 2
          }, 1000)
        }
      }
    }
  }
});

btn.onclick = function() {
  window.location.reload()
}

setTimeout(function() {
  for(let i = 0; i < parent.length; i++) {
    parent[i].style.cssText = 'transform: rotateY(180deg);'
  }
  setTimeout(function() {
    for(let i = 0; i < parent.length; i++) {
      parent[i].style.cssText = 'transform: rotateY(0deg);'
    }
  }, 1000) 
}, 1000)