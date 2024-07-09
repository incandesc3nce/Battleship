export default function fillBoard(boardElement) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    boardElement.appendChild(cell);
  }
}