export default function showPlayerShips(gameboard) {
  for (let i = 0; i < 100; i++) {
    const cell = document.querySelectorAll(".board-left .cell")[i];
    const row = Math.floor(i / 10);
    const col = i % 10;
    if (gameboard.playingField[row][col].ship) {
      cell.classList.add("ship");
    }
  }
}