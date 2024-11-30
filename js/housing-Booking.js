// main variables
const stu_rep_Btn = document.getElementById("sut-btn");
let main = document.getElementById("main");
let students_report_Cont = document.getElementById("students-report");
let dark = document.querySelector(".dark");

// data variables
const data = document.querySelector(".data");
const Ad = document.getElementById("Add");
const Name = document.getElementById("name");
const College = document.getElementById("college");
const Year = document.getElementById("year");
const cancel = document.getElementById("cancel");
const submit = document.getElementById("submit");
const checkboxes = [
  document.querySelector("#check1"),
  document.querySelector("#check2"),
];
let payed = "";

// delete sure variables
const deleteParent = document.querySelector(".delete");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

stu_rep_Btn.addEventListener("click", function () {
  main.style.cssText = "justify-content: space-between;";
  setTimeout(() => {
    students_report_Cont.style.cssText = "width: 1000px; height: 100%";
  }, 500);

  Ad.onclick = function () {
    data.style.display = "block";
    submit.innerText = "submit";

    // clearing inputs values
      Name.value = "";
      College.value = "";
      Year.value = "";
      checkboxes.forEach((el) => {
        el.checked = false;
      });

    // creating variables
    let contDiv = document.createElement("div");
    let name = document.createElement("p");
    let college = document.createElement("p");
    let year = document.createElement("p");
    let payment = document.createElement("p");
    let trash = document.createElement("i");
    let fix = document.createElement("i");

    // cancel button
    cancel.onclick = function () {
      data.style.display = "none";
      dark.style.display = "none";
    };
    dark.style.display = "block";

    // payment value
    checkboxes.forEach((ele) => {
      ele.onclick = function () {
        checkboxes.forEach((el) => {
          if (el != ele) {
            el.checked = false;
            payed = "لم يدفع";
          } else {
            payed = "دفع";
          }
        });
      };
    });

    // submit
    submit.onclick = function () {
      // creating vaiables
      if (submit.innerText == "submit") {
        // setting variables data
        name.innerText = Name.value;
        college.innerText = College.value;
        year.innerText = Year.value;
        payment.innerText = payed;
        trash.className = "fa-solid fa-trash";
        fix.className = "fas fa-wrench";
        fix.id = "fix";
        contDiv.className = "contDiv";

        // Appending Children
        contDiv.appendChild(name);
        contDiv.appendChild(college);
        contDiv.appendChild(year);
        contDiv.appendChild(payment);
        contDiv.appendChild (trash);
        contDiv.appendChild(fix);
      }

      // trash button
      trash.onclick = function () {
        deleteParent.style.display = "flex";
        yes.onclick = function () {
          contDiv.remove();
          deleteParent.style.display = "none";
        };
        no.onclick = function () {
          deleteParent.style.display = "none";
        };
      };

      // fix button
      fix.onclick = function () {
        data.style.display = "block";
        let arr = Array.from(contDiv.children);

        Name.value = arr[0].innerText;
        College.value = arr[1].innerText;
        Year.value = arr[2].innerText;
        submit.innerText = 'change';

        if(payed == 'دفع') {
          checkboxes[1].checked = true
        } else {
          checkboxes[0].checked = true;
        }

        if(submit.innerText == 'change') {
          submit.onclick = function() {
            arr[0].innerText = Name.value;
            arr[1].innerText = College.value;
            arr[2].innerText = Year.value;
            arr[3].innerText = payed;
            data.style.display = 'none'
          }
        }
      };

      // Clear inputs values
      data.style.display = "none";
      dark.style.display = "none";

      students_report_Cont.appendChild(contDiv);
    };
  };
});
