// Default 
const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
  });
}

// Navbar mobile e desktop
const IconOpen = document.querySelector(".IconOpen");
const IconClose = document.querySelector(".IconClose");
const IconBag = document.querySelector(".IconBag");
const header = document.getElementById("header");

IconOpen.addEventListener("click", function () {
  let menu = document.querySelector(".mobile__list");

  header.style.transition = "0.5s";
  header.style.background = "#000000";
  menu.style.height = "100vh";
  IconOpen.style.display = "none";
  IconClose.style.display = "block";
  IconBag.style.visibility = "hidden";
  document.documentElement.style.overflow = "hidden";

  document.body.onresize = function () {
    if (document.body.clientWidth > 768) {
      menu.style.height = "0";
      IconOpen.style.display = "block";
      IconClose.style.display = "none";
      header.style.background = "#000000cc";
      document.documentElement.style.overflow = "auto";
    }
  };
});

IconClose.addEventListener("click", function () {
  let menu = document.querySelector(".mobile__list");

  header.style.background = "#000000cc";
  header.style.transition = "1.4s";
  menu.style.height = "0";
  IconOpen.style.display = "block";
  IconClose.style.display = "none";
  IconBag.style.visibility = "visible";
  document.documentElement.style.overflow = "auto";
});

// Menu de navegação footer
const columns = document.querySelectorAll(".column");
const box = document.querySelectorAll(".box__links");

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("openClose");
    box[i].classList.toggle("box_in");
  });
}
