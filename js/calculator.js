
const numbers = document.querySelectorAll('#num button');
const input = document.getElementById('para');
const icon = document.getElementById('IC');
const reduce = document.getElementById('Red')

numbers.forEach(function(ele) {
  ele.onclick = function (e) {
    if(e.target.innerText == '=') {
      input.innerText = eval(input.innerText.replaceAll('X', '*').replaceAll('÷', '/').replaceAll('%', '/100'))
    } else if (e.target.innerText == 'C') {
      input.innerText = ''
    } else {
      input.innerText += e.target.innerText
    }
    if(e.target.innerText !== 'C') {
      icon.style.color = '#9292ff'
      reduce.style.cursor = 'pointer'
    } else {
      icon.style.color = '#525258'
      reduce.style.cursor = ''
    }
    // e.target.style.cssText = 'animation: cool 0.5s linear' // solve it later
  }
})
reduce.onclick = function() {
  input.innerText = input.innerText.slice(0, input.innerText.length - 1)
  if(input.innerText.length == 0) {
    icon.style.color = '#525258'
    reduce.style.cursor = ''
  }
}



// that was by me
// function Eqal() {
// let val = input.value.split('');
//       let left = ''
//       let Curr = ''
//       let result;
//       let right = '';
//       let OP = '';
//       for(let i = 0; i < val.length; i++) {
//         if(!isNaN(val[i])) {
//           Curr += val[i]
//           val.shift()
//           i--
//         } else {
//           OP = val[i]
//           val.shift()
//           i--
//           left = +Curr 
//           Curr = ''
//         }
//         if(left != '') {
//           right = +Curr
//         }

//         if(OP == '+' && left != '' && right != '') {
//           result = left + right
//           val.unshift(String(result))
//           left = ''
//           right = ''
//           OP = ''
//           Curr = ''
//         } else if (OP == '-' && left != '' && right != '') {
//           result = left - right
//           val.unshift(String(result))
//           left = ''
//           right = ''
//           OP = ''
//           Curr = ''
//         } else if (OP == 'X' && left != '' && right != '') {
//           result = left * right
//           val.unshift(String(result))
//           left = ''
//           right = ''
//           OP = ''
//           Curr = ''
//         } else if (OP == '÷' && left != '' && right != '') {
//           result = left / right
//           val.unshift(String(result))
//           left = ''
//           right = ''
//           OP = ''
//           Curr = ''
//         }
//       }
//     return input.value = result
// }