import Gameboard from "../classes/Gameboard";
import Cell from "../classes/Cell";

test("constructs playing field", () => {
  const gameboard = new Gameboard(3);
  expect(gameboard.playingField).toEqual([
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
  ]);
});
