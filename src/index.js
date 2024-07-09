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

gameboard1.randomizeShips();
gameboard2.randomizeShips();

fillPlayerBoard(board1, gameboard1);
fillOpponentBoard(board2, gameboard2);

showPlayerShips(gameboard1);