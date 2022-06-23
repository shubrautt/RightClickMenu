const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const links = document.querySelectorAll(".links");

container.addEventListener("contextmenu", handleClick);
btn.addEventListener("click", handleClick);
links.forEach((e) => {
  e.addEventListener("click", handleClick);
});

function handleClick(e) {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  if (e.which === 3) {
    e.preventDefault();
    overlay.style.display = "block";
    menu.style.display = "flex";
    menu.style.opacity = "1";
    menu.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
  } else if (e.which === 1) {
    overlay.style.display = "none";
    menu.style.display = "none";
  }
}
