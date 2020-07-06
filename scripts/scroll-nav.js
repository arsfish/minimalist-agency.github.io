var headerNavBtn = document.getElementById("header-btn");
var targetText = document.getElementById("content");
function navBtnClick() {
  targetText.scrollIntoView({ block: "start", behavior: "smooth" });
}
headerNavBtn.addEventListener("click", navBtnClick);
