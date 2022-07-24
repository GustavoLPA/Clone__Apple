var IconOpen = document.querySelector(".IconOpen");
var IconClose = document.querySelector(".IconClose");
var IconBag = document.querySelector(".IconBag");
var header = document.getElementById("header");

IconOpen.addEventListener("click", function () {
  let menu = document.querySelector(".mobile__list");

  header.style.transition = "0.5s";
  header.style.background = "#000000";
  menu.style.height = "100vh";

  IconOpen.style.display = "none";
  IconClose.style.display = "block";

  document.documentElement.style.overflow = "hidden";
});


IconClose.addEventListener("click", function () {
  let menu = document.querySelector(".mobile__list");

  header.style.background = "#000000cc";
  header.style.transition = "1.4s";
  menu.style.height = "0";

  IconOpen.style.display = "block";
  IconClose.style.display = "none";

  document.documentElement.style.overflow = "auto";
});
