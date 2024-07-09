import opponentsTurn from "../game/opponentsTurn.js";
import showResetDialog from "../components/showResetDialog.js";

export default function hitDetector(cell, i, gameboard, gameboard2) {
  const row = Math.floor(i / 10);
  const col = i % 10;
  const madeHit = gameboard.receiveAttack(row, col);
  const hitElement = document.createElement("div");
  if (madeHit) {
    hitElement.classList.add("hit");
    cell.appendChild(hitElement);
  } else {
    hitElement.classList.add("miss");
    cell.appendChild(hitElement);
  }
  cell.className = "cell";
  if (gameboard.allShipsSunk()) showResetDialog(true);
  opponentsTurn(gameboard2);
}
