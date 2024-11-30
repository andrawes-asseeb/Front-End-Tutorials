
const textArea = document.querySelector('textarea');
const number = document.getElementById('number');

textArea.oninput = function() {
  if(textArea.textLength > 100) {
    document.getElementById('limited').style.cssText = 'opacity: 1; bottom: -70px'
    textArea.style.borderColor = 'red';
  } else {
    document.getElementById('limited').style.cssText = 'opacity: 0;'
    textArea.style.borderColor = '#007bff'
  }
  number.innerText =`${textArea.textLength} / 100`;
}

// Another Code

// textArea.addEventListener('keyup', function() {
//   if(textArea.value.length > 100) {
//     textArea.style.borderColor = 'red';
//   } else {
//     textArea.style.borderColor = '#007bff'
//   }
//   number.innerHTML = `${textArea.value.length} / 100`
// })



