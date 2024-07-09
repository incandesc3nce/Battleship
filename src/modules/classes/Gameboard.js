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
        if (this.playingField[row][col + i].ship) {
          throw new Error("Ship is horizontally overlapping");
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (this.playingField[row + i][col].ship) {
          throw new Error("Ship is vertically overlapping");
        }
      }
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

  tryPlacingShip(length) {
    const col = Math.floor(Math.random() * 10);
    const row = Math.floor(Math.random() * 10);
    const direction = Math.floor(Math.random() * 2);
    try {
      this.placeShip(length, col, row, direction);
    } catch {
      this.tryPlacingShip(length);
    }
  }
  
  randomizeShips() {
    const ships = [5, 4, 3, 3, 2];
    ships.forEach((length) => {
      this.tryPlacingShip(length);
    });
  }

  allShipsSunk() {
    return this.amountOfShips === 0;
  }
}
