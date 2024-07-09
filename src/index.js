import './style.css';
import './index.html';
import fillPlayerBoard from './modules/components/fillPlayerBoard.js';
import fillOpponentBoard from './modules/components/fillOpponentBoard.js';
import Gameboard from './modules/classes/Gameboard.js';
import showPlayerShips from './modules/components/showPlayerShips.js';

const board1 = document.querySelector('.board.board-left');
const board2 = document.querySelector('.board.board-right');

const gameboard1 = new Gameboard(10);
const gameboard2 = new Gameboard(10);

gameboard1.placeShip(3, 0, 1, true);
gameboard1.placeShip(2, 2, 0, false);
gameboard1.placeShip(1, 3, 3, false);
gameboard1.placeShip(4, 5, 5, true);

gameboard2.placeShip(3, 0, 1, true);
gameboard2.placeShip(2, 2, 0, false);
gameboard2.placeShip(1, 3, 3, false);
gameboard2.placeShip(4, 5, 5, true);

fillPlayerBoard(board1, gameboard1);
fillOpponentBoard(board2, gameboard2);

showPlayerShips(gameboard1);