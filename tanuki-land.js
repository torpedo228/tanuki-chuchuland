window.addEventListener("load", init, false);

window.addEventListener('mousedown', function (e) {
  const audio = document.querySelector(`audio[data-key="87"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const clickMe = document.getElementById("clickMe");
  clickMe.innerHTML = "啾啾啾";

  window.addEventListener('mouseup', function (e) {

    clickMe.innerHTML = "點我!";
  })


})


function showLoginPrompt() {


  if (login.innerText == "登入") {
    loginPrompt.style.display = "block";

  } else if (login.innerText == "登出") {
    profile.src = "./img/禿頭海豹左看.png";
    userName.innerText = "";
    login.innerText = "登入"
    loginPrompt.style.display = "none";
    welcome.style.display = "flex";
    logoInPage.style.display = "none";
  }

}


function resetAndCloseLoginPromptAndShowLoginPage() {
  loginPrompt.style.display = "none";

  let form = document.getElementsByClassName("input");
  for (let i = 0; i < form.length; i++) {
    form[i].reset();
  }

}

function checkLoginData() {
  let welcome = document.getElementById("welcome");
  let logoInPage = document.getElementById("logoInPage");


  if (userId.value == "lazyTanupig" && userPsw.value == "fatfatfat") {
    resetAndCloseLoginPromptAndShowLoginPage();
    profile.src = "./img/狸貓側邊的背影.png";
    userName.innerText = "狸貓闡釋者";
    login.innerText = "登出";
    logoInPage.style.display = "flex";
    welcome.style.display = "none";

    //帳號 lazyTanupig , 密碼 fatfatfat


  } else {
    window.alert("提示:懶惰狸貓豬 肥嘟嘟!")
  }
}

function init() {
  let login = document.getElementById("login");
  let checkLoginDataBtn = document.getElementById("checkLoginDataBtn");
  let closeLoginPrompt = document.getElementById("closeLoginPrompt");




  login.addEventListener("click", showLoginPrompt);

  checkLoginDataBtn.addEventListener("click", checkLoginData);

  closeLoginPrompt.addEventListener("click", resetAndCloseLoginPromptAndShowLoginPage);

};