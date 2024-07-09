import hitDetector from "../listeners/hitDetector.js";

export default function fillOpponentBoard(boardElement, gameboard, gameboard2) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("enemy-cell");
    cell.addEventListener("click", () => {
      hitDetector(cell, i, gameboard, gameboard2);
    }, {once: true});

    boardElement.appendChild(cell);
  }
}
