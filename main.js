function closeBtn() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("main").style.opacity = "1";
  // document.getElementById("footer").style.marginLeft = "0";
}

function openBtn() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("main").style.opacity = "0.3";
  // document.getElementById("footer").style.marginLeft = "210px";
}

function backToHome() {
  window.location.href = "#home";
}

function startBylogin() {
  window.location.href = "./html/register.html";
}
// javascript  form validation
document.getElementById("inform1").addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let errorMsg1 = document.getElementById("errmsg1");
  let errorMsg2 = document.getElementById("errmsg2");
  let errorMsg3 = document.getElementById("errmsg3");
  // reset user input
  userName = "";
  password = "";
  email = "";
  [errorMsg1, errorMsg2, errorMsg3] = "";

  // validate form
  if (userName == "") {
    errorMsg1.innerText = "Your name is required in correct order";
  } else if (!email) {
    errorMsg2.innerText = "Your email is required in correct form";
  } else if (password.length < 8) {
    errorMsg3.innerText = "Password must be 8 character long or more !";
  } else if (!password) {
    errorMsg3.innerText = "Password is required !";
  } else {
    alert("Your data are saved!!");
    alert("Welcome into our site👌!!");
  }
  // save data in localstorage
  let formData = [userName, password, email];
  window.localStorage.getItem("formData", JSON.stringify(formData));
  // reset form data
  document.getElementById("inform").reset();
});
document.getElementById("inform").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let errEmail = document.getElementById("errEmail");
  let errpsd = document.getElementById("errpssd");
  // reset user input
  // userName = "";
  // password = "";
  // email = "";
  // errEmail = "";
  // errpsd = "";

  // validate form
  if (!emailValidation(email)) {
    errEmail.innerText = "Your email is required in correct form";
  } else if (password.length < 8) {
    errpsd.innerText = "Password must be 8 character long or more !";
  } else if (!password) {
    errpsd.innerText = "Password is required !";
  } else {
    alert("Your data are saved!!");
    alert("Welcome into our site👌!!");
  }
  // save data in localstorage
  let formData = [userName, password, email];
  formData.forEach((element) => {
    window.localStorage.getItem("formData", JSON.stringify(element));
  });
  // reset form data
  document.getElementById("inform").reset();
});

function emailValidation(email) {
  let regexp;
  return (regexp = /\d@+[^\s+@]/g.test(email));
}

// function userNameValidation(userName) {
//   let regexp;
//   return (regexp = /[A-Z\s]+[A-Za-z]/g.test(userName));
// }

// function passwordValidation(password) {
//   let regexp;
//   return (regexp = /[A-Z]+[0-9a-z\s]/g.test(password));
// }
