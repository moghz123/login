let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let alertRegister = document.getElementById("alertRegister");
let signButton = document.getElementById("signButton");
let sucsses = document.getElementById("sucssRestair");
let allData = [];
if (localStorage.getItem("users")) {
  allData = JSON.parse(localStorage.getItem("users"));
}

if (signButton != null) {
  signButton.addEventListener("click", function () {
    
    
    if (
      signName.value != "" &&
      signEmail.value != "" &&
      signPassword.value != ""
    ) 
   
    {
      if( validationName()==true && validationEmail()==true) {
       if (isEmailExsits() == false) {
        let user = {
          name: signName.value,
          email: signEmail.value,
          password: signPassword.value,
        };
        allData.push(user);
        localStorage.setItem("users", JSON.stringify(allData));
        console.log(allData);
        alertRegister.classList.replace("d-block", "d-none");
        sucsses.classList.replace("d-none", "d-block");
      }
    } else {
      alertRegister.innerHTML = "pleas file all date";
      alertRegister.classList.replace("d-none", "d-block");
      sucsses.classList.replace("d-block", "d-none");
    }
      }
     
  });
  function isEmailExsits() {
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].email == signEmail.value) {
        alertRegister.innerHTML = "email already exists";
        alertRegister.classList.replace("d-none", "d-block");
        return true;
      }
    }
    return false;
  }
}

//login

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let alertlogin = document.getElementById("alertlogin");
let currntUser = "";
if (document.getElementById("loginButton")) {
  document.getElementById("loginButton").addEventListener("click", function () {
    if (loginEmail.value != "" && loginPassword.value != "") {
      for (let i = 0; i < allData.length; i++) {
        if (
          (loginEmail.value =
            allData[i].email && loginPassword.value == allData[i].password)
        ) {
          localStorage.setItem("currntUser", allData[i].name);
          window.location.href = "home.html";
          alertlogin.classList.replace("d-block", "d-none");
        } else {
          alertlogin.innerHTML = "incorect password or email";
          alertlogin.classList.replace("d-none", "d-block");
        }
      }
    } else {
      alertlogin.innerHTML = "all field is requair";
      alertlogin.classList.replace("d-none", "d-block");
    }
  });
}
//home
let welcom = document.getElementById("welcom");
if (welcom != null) {
  welcom.innerHTML = `
<h2>welcom ${localStorage.getItem("currntUser")}<h2>
`;
}
// regex

function validationName() {
  let text = signName.value;
  let massgeElment = document.getElementById("massgName");
  let regex = /^[a-z]{4,8}$/;
  if (regex.test(text) == true) {
    signName.classList.add("is-valid");
    signName.classList.remove("is-invalid");
    massgeElment.classList.add("d-none");
    return true;
  } else {
    signName.classList.add("is-invalid");
    signName.classList.remove("is-valid");
    massgeElment.classList.remove("d-none");
    return false;
  }
}
function validationEmail() {
  let text = signEmail.value;
  let massgeElment = document.getElementById("massgEmail");
  let regex = /^[a-z]{1,9}[1-9]{1,9}@(gmail|hotmail|yahoo).com$/;
  if (regex.test(text) == true) {
    signEmail.classList.add("is-valid");
    signEmail.classList.remove("is-invalid");
    massgeElment.classList.add("d-none");
    return true;
  } else {
    signEmail.classList.add("is-invalid");
    signEmail.classList.remove("is-valid");
    massgeElment.classList.remove("d-none");
    return false;
  }
}
