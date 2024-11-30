
let span = document.querySelector("main span");
let Btn = document.querySelector("button");
let pageHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function () {
  let NumberToIncrease = Math.floor((window.scrollY / pageHeight) * 360);// try to understand this Math one
  span.style.background = `conic-gradient(black ${NumberToIncrease}deg, #EEE 0deg)`;
});

Btn.onclick = function () {
  window.scrollTo(0, 0);
};
