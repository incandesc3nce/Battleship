import Gameboard from "../classes/Gameboard";
import Cell from "../classes/Cell";
import Ship from "../classes/Ship";

test("constructs playing field", () => {
  const gameboard = new Gameboard(3);
  expect(gameboard.playingField).toEqual([
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
  ]);
});

test("places ships", () => {
  const gameboard = new Gameboard(4);
  gameboard.placeShip(3, 0, 1, true);
  gameboard.placeShip(2, 2, 0, false);
  gameboard.placeShip(1, 3, 3, false);

  expect(gameboard.playingField).toEqual([
    [new Cell(), new Ship(3), new Ship(3), new Ship(3)],
    [new Cell(), new Cell(), new Cell(), new Cell()],
    [new Ship(2), new Cell(), new Cell(), new Cell()],
    [new Ship(2), new Cell(), new Cell(), new Ship(1)],
  ]);
});

test("doesn't place ships outside of playing field", () => {
  const gameboard = new Gameboard(4);

  expect(() => gameboard.placeShip(3, 0, 3, true)).toThrow(
    "Ship is out of bounds"
  );
});
