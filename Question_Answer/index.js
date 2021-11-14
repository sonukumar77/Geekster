const cntBox = document.getElementsByClassName("contentBox");

for (i = 0; i < cntBox.length; i++) {
  cntBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}