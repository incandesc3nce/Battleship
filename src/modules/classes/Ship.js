export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.isSunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    this.isSunk = this.hits === this.length ? true : false;
  }
}