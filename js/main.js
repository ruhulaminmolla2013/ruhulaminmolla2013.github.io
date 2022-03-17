const windowLoding = document.getElementById("loadingAnimation");

window.addEventListener("load", () => {
  windowLoding.style.display = "none";
});

// header / drawer
const menuIcon = document.getElementById("menu");
const drawer = document.getElementById("drawer");
const closeIcon = document.getElementById("close-icon");
// const nav = document.getElementById("nav");

menuIcon.addEventListener("click", openDrawer);
closeIcon.addEventListener("click", closeDrawer);
nav.addEventListener("click", closeDrawer);

function openDrawer() {
  console.log("open drawer");
  drawer.classList.add("drawer__open");
  drawer.classList.remove("drawer__close");
  menuIcon.classList.remove("menu-icon__show");
  menuIcon.classList.add("menu-icon__hide");
}

function closeDrawer() {
  console.log("close drawer");
  drawer.classList.remove("drawer__open");
  drawer.classList.add("drawer__close");
  menuIcon.classList.remove("menu-icon__hide");
  menuIcon.classList.add("menu-icon__show");
}

// /** active class to nav bar*** */
// // Get the container element
// var btnContainer = document.getElementById("nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("navItem");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
