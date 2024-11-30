
const reel = document.getElementById("reel");
const tapWater = document.getElementById("tap-water");
const glassWater = document.getElementById("glass-water");
const drop = document.getElementById('drop')
const glass = document.querySelector('.glass')

let bool = true;

reel.addEventListener("click", function() {
  if(bool) {
    reel.style.transform = 'rotateY(360deg)'

    tapWater.style.height = '280px'
    tapWater.style.width = '20px'

    setTimeout(() => {
      glassWater.style.height = '170px'
    }, 3000);

    bool = false
  } else {
    reel.style.transform = 'rotateY(0deg)'

    tapWater.style.height = '0px'
    setTimeout(() => {
      tapWater.style.width = '10px'
    }, 2900);
    bool = true
  }
})

drop.onclick = function() {
  if(glassWater.style.height == '170px' && bool) {
    drop.style.transform = 'rotate(180deg)'
    glass.style.transform = 'rotate(180deg)'
      setTimeout(() => {
        glassWater.style.height = '0px'
      }, 3000);
  } else {
    glass.style.transform = 'rotate(0deg)'
    drop.style.transform = 'rotate(0deg)'
  }
}

