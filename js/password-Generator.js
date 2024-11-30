
const btn = document.getElementById('btn');
const pass = document.getElementById('Password');

let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let listOfSymboles = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/'];
let listOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

btn.onclick = function() {
  let password = '';

  while(password.length < 10) {
    if(password.length < 6) {
      password += listOfNumbers[Math.ceil(Math.random() * listOfNumbers.length - 1)]
      password += listOfSymboles[Math.ceil(Math.random() * listOfSymboles.length - 1)]
    } else if (password.length >= 6 && password.length < 8) {
      password += listOfSymboles[Math.ceil(Math.random() * listOfSymboles.length - 1)]
    } else if (password.length >= 8 && password.length < 10) {
      password += listOfLetters[Math.ceil(Math.random() * listOfLetters.length - 1)]
      password += listOfNumbers[Math.ceil(Math.random() * listOfNumbers.length - 1)]
    }
  }
  pass.innerText = password
}