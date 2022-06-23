const container = document.getElementById("container");
const btn = document.getElementById("btn");
const links = document.querySelectorAll(".links");

container.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  overlay.style.display = "block";
  menu.style.display = "flex";
  menu.style.opacity = "1";
  menu.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
});

btn.addEventListener("click", hide);
links.forEach((e) => {
  e.addEventListener("click", hide);
});

function hide() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  menu.style.display = "none";

  btn.removeEventListener();
}
