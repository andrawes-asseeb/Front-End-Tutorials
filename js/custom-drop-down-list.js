
const input = document.getElementById('input')
const ItemsParent = document.getElementById('selected-language')
const Items = document.querySelectorAll('#selected-language *')
const arrow = document.getElementById('arrow');

input.onclick = function() {
  if(arrow.style.transform == 'rotate(45deg)') {
    arrow.style.transform = 'rotate(225deg)';
    ItemsParent.style.height = '0'
  } else {
    arrow.style.transform = 'rotate(45deg)';
    ItemsParent.style.height = '190px'
  }
}

Items.forEach(function(ele) {
  ele.onclick = function() {
    input.setAttribute('placeholder', ele.innerText)
  }
})