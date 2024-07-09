import hitDetector from "../listeners/hitDetector.js";

export default function fillBoard(boardElement, gameboard) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("enemy-cell");
    cell.addEventListener("click", hitDetector.bind(null, cell, i, gameboard), {
      once: true,
    });

    boardElement.appendChild(cell);
  }
}
