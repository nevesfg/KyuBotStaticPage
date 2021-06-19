const badges = document.querySelectorAll(".badge");

for (let badge of badges) {
  let color = badge.getAttribute("data-color");
  if (color) {
    badge.setAttribute("style", `background-color: ${color};`);
  }
}
