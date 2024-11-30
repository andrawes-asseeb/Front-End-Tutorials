
// This Project is not done yet

let container = Array.from(document.querySelectorAll(".pages > *")).reverse();
const Pre = document.getElementById("Pre");
const Nex = document.getElementById("Nex");

let i = 0;

Nex.onclick = function () {
  if (i < 5) {
    container[i].style.transform = `rotateY(180deg) skewY(-10deg)`;
    container[i].style.color = 'transparent'
    i++;
  }
  setTimeout(function() {
    container[i].style.zIndex =  i
  }, 800)
};

Pre.onclick = function () {
  if(i < 5) {
    container[i].style.zIndex = 'unset'
  }
  i--;
  if (i >= 0) {
    container[i].style.transform = `rotateY(0deg) skewY(-10deg)`;
    container[i].style.color = 'black'
  }
  if(i != 0) {
    container[i].style.zIndex = (i + 1)
  }
};
