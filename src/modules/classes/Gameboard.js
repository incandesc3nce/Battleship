import Cell from "./Cell";
import Ship from "./Ship";

export default class Gameboard {
  constructor(n) {
    this.playingField = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => new Cell())
    );
  }

  placeShip(length, row, col, isHorizontal) {
    const ship = new Ship(length);

    if (isHorizontal) {
      for (let i = 0; i < length; i++) {
        this.playingField[row][col + i].ship = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.playingField[row + i][col].ship = ship;
      }
    }
  }

  
}
