document.addEventListener("DOMContentLoaded", function() {
  // Your FAQ JavaScript code here
  var buton = document.querySelectorAll(".buton");
  var answerBox = document.querySelectorAll(".answer");

  for (var i = 0; i < buton.length; i++) {
    buton[i].addEventListener("click", function() {
      this.querySelector(".rotate").classList.toggle("minus");
      this.parentElement.parentElement.classList.toggle("show");
    });
  }
});
