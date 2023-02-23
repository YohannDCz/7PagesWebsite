const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const filter = document.querySelector(".filter");

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  close.style.display = "block";
  menu.style.display = "flex";
  filter.style.display = "flex";
  document.body.style.overflowY = "hidden"
})

close.addEventListener("click", function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  menu.style.display = "none";
  filter.style.display = "none";
  document.body.style.overflowY = "visible";
})