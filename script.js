
function addNewLanField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("laField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("la");
  let aqAddButtonOb = document.getElementById("laAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewEdField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("edField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("ed");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}



function addNewTiField() {
  let x = document.createElement("input");
  x.classList.add("form-control");
  x.classList.add("tiField");
  x.classList.add("mt-2");
  x.setAttribute("placeholder", "Enter title");

  let aqOb = document.getElementById("we");
  let aqAddButtonOb = document.getElementById("weAddButton");
  aqOb.insertBefore(x, aqAddButtonOb);
}

function addNewWEField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Experience");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("sk");
  let aqAddButtonOb = document.getElementById("skAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}


function generateCV() {
  document.getElementById("nName").innerHTML =
    document.getElementById("nameField").value;


  document.getElementById("jJob").innerHTML = document.getElementById(
    "jobFiled"
  ).value;


  document.getElementById("cContact").innerHTML =
    document.getElementById("contactField").value;


  document.getElementById("gGmail").innerHTML =
    document.getElementById("gmailFiled").value;

  document.getElementById("fFacebook").href =
    document.getElementById("fbField").value;

  document.getElementById("lLinkedin").href =
    document.getElementById("linkedField").value;


  let languages = document.getElementsByClassName("laField");
  let lanF = "";
  for (let e of languages) {
    lanF += `<li> <span> ${e.value} </span></li>`;
  }
  document.getElementById("lan").innerHTML = lanF;


  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;



  let educationF = document.getElementsByClassName("edField");
  let resEdu = "";
  for (let e of educationF) {
    resEdu += `<li> <p> ${e.value} </p></li>`;
  }
  document.getElementById("edu").innerHTML = resEdu;

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str += `<li class="squar"> <h4> ${e.value} </h4></li>`;
  }
  document.getElementById("weT").innerHTML = str;


  let aqs = document.getElementsByClassName("skField");
  let str1 = "";
  for (let e of aqs) {
    str1 += `<li class="squar"> <h4> ${e.value} </h4></li>`;
  }
  if (str1.length) document.getElementById("skills").innerHTML = str1;

  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
}

function printCV() {
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("btnN").style.display = "none";
  window.print();
}