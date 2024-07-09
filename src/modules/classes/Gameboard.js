import Cell from "./Cell.js";
import Ship from "./Ship.js";

export default class Gameboard {
  constructor(n) {
    this.playingField = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => new Cell())
    );
    this.amountOfShips = 0;
  }

  placeShip(length, row, col, isHorizontal) {
    const ship = new Ship(length);

    if (
      col + length > this.playingField.length ||
      row + length > this.playingField.length
    ) {
      throw new Error("Ship is out of bounds");
    }

    if (isHorizontal) {
      for (let i = 0; i < length; i++) {
        this.playingField[row][col + i].ship = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.playingField[row + i][col].ship = ship;
      }
    }

    this.amountOfShips += 1;
  }

  receiveAttack(row, col) {
    const cell = this.playingField[row][col];

    if (cell.ship) {
      cell.ship.hit();
      cell.ship.hasSunk ? this.amountOfShips -= 1 : null;
      cell.isHit = true;
      return true;
    }

    cell.isHit = true;
    return false;
  }

  allShipsSunk() {
    return this.amountOfShips === 0;
  }
}
