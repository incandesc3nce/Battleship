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

  const shipPlacement = gameboard.playingField.map((row) =>
    row.map((cell) => cell.ship)
  );

  expect(shipPlacement).toEqual([
    [null, new Ship(3), new Ship(3), new Ship(3)],
    [null, null, null, null],
    [new Ship(2), null, null, null],
    [new Ship(2), null, null, new Ship(1)],
  ]);
});

test("receives attack on empty cell", () => {
  const gameboard = new Gameboard(3);

  expect().toBe();
});
