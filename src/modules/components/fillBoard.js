export default function fillBoard(selector) {
  const board = document.querySelector(selector);
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}