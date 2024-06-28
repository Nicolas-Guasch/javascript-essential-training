/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
import backpack from "./backpack.js";

const main = document.createElement("main");
main.innerHTML =
  backpack.markup() +
  `<div><button id="toggleLid">Toggle Lid</button></div>
    `;
document.body.appendChild(main);

let btn = document.getElementById("toggleLid");

if (btn) {
  btn.addEventListener("click", () => {
    backpack.toggleLid(!backpack.lidOpen);
  });
}
