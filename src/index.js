import "./style.css";
import "./index.html";
import reset from "./modules/game/reset.js";

reset();

document.querySelector(".reset-button").addEventListener("click", () => {
  reset();
});
