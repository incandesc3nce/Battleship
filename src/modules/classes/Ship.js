export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.hasSunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    const enoughHits = this.hits === this.length;
    this.hasSunk = enoughHits;

    return this.hasSunk;
  }
}