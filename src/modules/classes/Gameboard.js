import Cell from "./Cell";
import Ship from "./Ship";

export default class Gameboard {
  constructor(n) {
    this.playingField = Array.from({ length: n }, () =>
      new Array(n).fill(new Cell())
    );
  }

  placeShip(length, row, col, isHorizontal) {
    const ship = new Ship(length);

    if (isHorizontal) {
      const span = col + length - 1;
      if (span <= this.playingField[0].length) {
        for (let i = col; i <= span; i++) {
          this.playingField[row][i] = ship;
        }
      }
    } else {
      const span = row + length - 1;
      if (span <= this.playingField.length) {
        for (let i = row; i <= span; i++) {
          this.playingField[i][col] = ship;
        }
      }
    }
  }
}
