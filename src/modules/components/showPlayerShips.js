export default function showPlayerShips(gameboard) {
  const cells = document.querySelectorAll(".player-cell");
  for (let i = 0; i < 100; i++) {
    if (gameboard.playingField[Math.floor(i / 10)][i % 10].ship) {
      cells[i].classList.add("ship");
    }
  }
}