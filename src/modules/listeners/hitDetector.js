export default function hitDetector(cell, i, gameboard) {
  const row = Math.floor(i / 10);
  const col = i % 10;
  const madeHit = gameboard.receiveAttack(row, col);
  if (madeHit) {
    const hitElement = document.createElement("div");
    hitElement.classList.add("hit");
    cell.appendChild(hitElement);
  }
}
