import showResetDialog from "../components/showResetDialog.js";

export default function opponentsTurn(gameboard) {
  const row = Math.floor(Math.random() * 10);
  const col = Math.floor(Math.random() * 10);
  const cells = document.querySelectorAll(".player-cell");
  if (gameboard.playingField[row][col].isHit) {
    return opponentsTurn(gameboard);
  }
  const madeHit = gameboard.receiveAttack(row, col);
  if (madeHit) {
    const hitElement = document.createElement("div");
    hitElement.classList.add("hit");
    cells[row * 10 + col].appendChild(hitElement);
  } else {
    const missElement = document.createElement("div");
    missElement.classList.add("miss");
    cells[row * 10 + col].appendChild(missElement);
  }
  if (gameboard.allShipsSunk()) showResetDialog(false);
}
