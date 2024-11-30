
let para = document.querySelector("p");
let charaBtn = Array.from(document.querySelectorAll(".characters > *"));
let headphone = document.getElementById("headphone");
let call_phone = document.querySelector('.call-phone')
let calling = document.querySelector('.calling');
let paraTwo = document.querySelector('.calling p')
let calling_buttons = Array.from(document.querySelectorAll('.call-chara > *'))
let cancelBtn = document.getElementById('cancel')

calling.remove()

charaBtn.forEach((ele) => {
  ele.onclick = function () {
    para.innerText += ele.innerText;
    ele.style.cssText = 'animation: smooth 0.3s linear'
    setTimeout(() => {
      ele.style.cssText = ''
    }, 300);
  };
});

headphone.onclick = function() {
  if(para.innerText.length != 0) {
    para.style.fontSize = '0px'
    charaBtn.forEach((ele) => {
      ele.style.fontSize = '0px'
    })
    headphone.style.cssText = 'width: 0; height: 0; font-size: 0;'

    setTimeout(() => {
      call_phone.remove()
    }, 1000);

    setTimeout(() => {
      document.body.appendChild(calling)
      setTimeout(() => {
        paraTwo.style.fontSize = '45px'
        paraTwo.innerText = para.innerText
        calling_buttons.forEach((ele) => {
          ele.style.cssText = 'width: 80px; height: 80px; font-size: 20px'
        })
        cancelBtn.style.cssText = 'width: 80px; height: 80px; font-size: 40px'
      }, 500)
    }, 500)
  }
}


cancelBtn.onclick = function() {
  paraTwo.style.fontSize = '0'
  para.innerText = ''
  calling_buttons.forEach((ele) => {
    ele.style.cssText = 'width: 0; height: 0; font-size: 0'
  })
  cancelBtn.style.cssText = 'width: 0; height: 0; font-size: 0'

  setTimeout(() => {
    calling.remove()
    document.body.appendChild(call_phone)
    setTimeout(() => {
      para.style.fontSize = '45px'
      charaBtn.forEach((ele) => {
        ele.style.fontSize = '40px'
      })
      headphone.style.cssText = 'width: 80px; height: 80px; font-size: 40px;'
    }, 500);
  }, 500)
}


