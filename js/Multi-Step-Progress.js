// Multi-Step-Progress
let PrevBtn = document.getElementById("prev");
let NextBtn = document.getElementById("next");
let spans = document.querySelectorAll("span");
let paras = document.querySelectorAll('p')

let i = 1;
let num = 0;

NextBtn.onclick = function () {
  if(i < 4 || num < 3) {
    paras[num].style.width = '100px'
    spans[i].style.borderColor = "blue";
    spans[i].style.transitionDelay = '0.2s'
    i++;
    num++;
  }
};

PrevBtn.onclick = function () {
  if(i !== 1 || num !== 0) {
    num--
    i--;
    paras[num].style.width = '0'
    spans[i].style.borderColor = "#5d5757";
    spans[i].style.cssText = 'transition-delay: 0.1s'
  }
};



