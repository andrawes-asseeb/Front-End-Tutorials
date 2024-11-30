let Tabs = document.querySelectorAll(".tabs li");
let TabsArray = Array.from(Tabs);
let Divs = document.querySelectorAll(".content > div");
let DivsArray = Array.from(Divs);

TabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    TabsArray.forEach(ele => {
      ele.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    DivsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.con).style.display = "block";
  });
});

/* [Search for Data Custom Attributes]

-- How You Can Connect some Elements With Others Elements Using The Data Attributes

You Can Use The "dataset" to connect the elements with each other
-- you just type the any data name in the elements like [data-con="One"]
-- the value represents the class name in the element you want to control it and do some changes on it
*/
