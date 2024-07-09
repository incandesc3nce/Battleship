import Gameboard from "../classes/Gameboard.js";
import fillPlayerBoard from "../components/fillPlayerBoard.js";
import fillOpponentBoard from "../components/fillOpponentBoard.js";
import showPlayerShips from "../components/showPlayerShips.js";

export default function reset() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.remove();
  })

  const board1 = document.querySelector(".board.board-left");
  const board2 = document.querySelector(".board.board-right");

  const gameboard1 = new Gameboard(10);
  const gameboard2 = new Gameboard(10);

  gameboard1.randomizeShips();
  gameboard2.randomizeShips();

  fillPlayerBoard(board1, gameboard1);
  fillOpponentBoard(board2, gameboard2, gameboard1);

  showPlayerShips(gameboard1);
}