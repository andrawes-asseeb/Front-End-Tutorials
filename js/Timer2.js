let startBtn = document.getElementById("btn1");
let resetBtn = document.getElementById("btn2");

let seconds = document.getElementById("sec");
let minuts = document.getElementById("min");
let hours = document.getElementById("hr");

let sec = 0;
let min = 0;
let hr = 0;

let deg1 = 0;
let deg2 = 0;
let deg3 = 0;

let nitervid;
let bool = true;

startBtn.onclick = function () {
  if(bool) {
    bool = false
    startBtn.innerText = 'pause'
    nitervid = setInterval(() => {
      StartSeconds()
    }, 1000);
  } else {
    clearInterval(nitervid)
    startBtn.innerText = 'continue'
    bool = true
  }
};

function StartSeconds() {
  sec++;
  deg1 = deg1 + 6;
  seconds.style.background = `conic-gradient(#7ae445 ${deg1}deg, #32323b 0deg)`;

  if (sec < 10) {
    seconds.innerText = `0${sec}`;
  } else if (sec == 60) {
    deg1 = 0;
    sec = 0;
    seconds.innerText = `0${sec}`;
    seconds.style.background = `conic-gradient(#7ae445 ${deg1}deg, #32323b 0deg)`;
    StartMinuts()
  } else {
    seconds.innerText = `${sec}`;
  }
}

function StartMinuts() {
  min++
  deg2 = deg2 + 6;
  minuts.style.background = `conic-gradient(#d4da43 ${deg2}deg, #32323b 0deg)`;
  if (min < 10) {
    minuts.innerText = `0${min}`;
  } else if (min == 60) {
    min = 0;
    deg2 = 0;
    minuts.innerText = `0${min}`;
    minuts.style.background = `conic-gradient(#d4da43 ${deg2}deg, #32323b 0deg)`;
    StartHours()
  } else {
    minuts.innerText = `${min}`;
  }
}

function StartHours() {
  hr++
  deg3 = deg3 + 6;
  hours.style.background = `conic-gradient(#b93ed6 ${deg3}deg, #32323b 0deg)`;
  if (hr < 10) {
    hours.innerText = `0${hr}`;
  } else if (hr == 60) {
    hr = 0;
    deg3 = 0;
    hours.innerText = `0${hr}`;
    hours.style.background = `conic-gradient(#b93ed6 ${deg3}deg, #32323b 0deg)`;
  } else {
    minuts.innerText = `${min}`;
  }
}

resetBtn.onclick = function () {
  sec = 0;
  min = 0;
  hr = 0;

  deg1 = 0;
  deg2 = 0;
  deg3 = 0;

  seconds.style.background = `conic-gradient(#7ae445 ${deg1}deg, #32323b 0deg)`;
  minuts.style.background = `conic-gradient(#d4da43 ${deg2}deg, #32323b 0deg)`;
  hours.style.background = `conic-gradient(#b93ed6 ${deg3}deg, #32323b 0deg)`;

  seconds.innerText = `0${sec}`;
  minuts.innerText = `0${sec}`;
  hours.innerText = `0${sec}`;

  startBtn.innerText = 'start'
  bool = true
  clearInterval(nitervid)
}