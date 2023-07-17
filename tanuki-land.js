window.addEventListener("load", init, false);

let lightBox = document.getElementById("lightBox");
let userName = document.getElementById("userName");
let profile = document.getElementById("profile");

function showLightBox() {
  let spanLogin = document.getElementById("spanLogin");

  if ((spanLogin.innerText) == "登入") {
    lightBox.style.display = "block";

  } else {
    userName.innerText = "";
    profile.src = "./狸貓放鬆.png";
    spanLogin.innerText = "登入";
    logo.style.display = "block";
    logoInPage.style.display = "none";
  }
}

function checkLoginData() {
  let userId = document.getElementById("userId");
  let userPsw = document.getElementById("userPsw");

  if (userId.value == "tanukijr" && userPsw.value == "878787") {
    profile.src = "./狸貓兔子.png";
    userName.innerText = "二狸貓";
    spanLogin.innerText = "登出";
    resetAndCloseFormAndShowLoginPage();

    //帳號 tanukijr , 密碼 878787

  } else {

    const fail = document.createElement("span");
    const failMessage = document.createTextNode("登入失敗!");
    fail.innerHTML = "<br/>"
    fail.appendChild(failMessage);

    document.getElementById("passwordInput").appendChild(fail);

    // document.getElementById("fail").innerHTML = "<br>登入失敗!";
  }

}

function closeLightBox() {
  lightBox.style.display = "none";
}

function resetAndCloseFormAndShowLoginPage() {
  let form = document.getElementsByClassName("input");
  for (let i = 0; i < form.length; i++) {
    form[i].reset();
    lightBox.style.display = "none";
    logo.style.display = "none";
    logoInPage.style.display = "block";
  }
}


function init() {
  let btnLogin = document.getElementById("btnLogin");
  let btnCancel = document.getElementById("btnCancel");

  spanLogin.addEventListener("click", showLightBox);
  btnLogin.addEventListener("click", checkLoginData);
  btnCancel.addEventListener("click", closeLightBox);
};