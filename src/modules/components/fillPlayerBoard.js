export default function fillPlayerBoard(boardElement) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("player-cell");
    boardElement.appendChild(cell);
  }
}