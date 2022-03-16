const menu = document.getElementById("menu");
const drawer = document.getElementById("drawer");
const close = document.getElementById("close-icon");

menu.addEventListener("click", () => {
  drawer.classList.add("drawer__open");
  drawer.classList.remove("drawer__close");
  menu.classList.remove("menu-icon__show");
  menu.classList.add("menu-icon__hide");
});
close.addEventListener("click", () => {
  drawer.classList.remove("drawer__open");
  drawer.classList.add("drawer__close");
  menu.classList.remove("menu-icon__hide");
  menu.classList.add("menu-icon__show");
});
