import Cell from "./Cell";

export default class Gameboard {
  constructor(n) {
    this.playingField = Array.from({ length: n }, () =>
      new Array(n).fill(new Cell())
    );
  }
}
