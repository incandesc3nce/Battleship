import opponentsTurn from "../game/opponentsTurn.js";

export default function hitDetector(cell, i, gameboard) {
  const row = Math.floor(i / 10);
  const col = i % 10;
  const madeHit = gameboard.receiveAttack(row, col);
  const hitElement = document.createElement("div");
  if (madeHit) {
    hitElement.classList.add("hit");
    cell.appendChild(hitElement);
  } else if (madeHit === false) {
    hitElement.classList.add("miss");
    cell.appendChild(hitElement);
  }
  cell.className = "cell";
  opponentsTurn(gameboard);
}
