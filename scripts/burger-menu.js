window.onload = function () {
  var x = document.getElementById("menu-bar");
  x.addEventListener("click", myFunction);

  function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle("open");
    x.classList.toggle("change");
  }
};
