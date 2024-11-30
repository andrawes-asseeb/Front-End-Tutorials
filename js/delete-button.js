
const parent = document.getElementById('parent')
const trash = document.getElementById('trash')
const btn = document.getElementById('btn')
const doc = document.getElementById('document')
const cutDoc = document.getElementById('cutted-doc')
const check = document.getElementById("cir");

parent.addEventListener('click', function() {
  btn.style.cssText = 'right: -20px; opacity: 0;';
  trash.style.cssText = 'left: 50%; transform: translate(-50%, -50%)'
  setTimeout(() => {
    doc.style.display = 'block'
    setTimeout(() => {
      doc.style.top = `0px`
      setTimeout(() => {
        if(doc.style.top == `0px`) {
          doc.style.height = '0px'
          doc.style.top = '13px'
          cutDoc.style.height = '25px'
          setTimeout(() => {
            cutDoc.style.top = '42px'
            cutDoc.style.height = '0px'
            setTimeout(() => {
              check.style.cssText = 'color: white; padding: 5px 10px; top: 60px; font-size: 20px;'
            }, 300);
          }, 400);
        }
      }, 300);
    }, 500);
  }, 800);

  setTimeout(() => {
    check.style.cssText = "color: transparent; padding: 0; top: 40px;";
    btn.style.cssText = "right: 10px; opacity: 1;";
    trash.style.cssText = "left: 10px; transform: translateY(-50%)";
  }, 3000);

  setTimeout(() => {
    window.location.reload();
  }, 3500);
})