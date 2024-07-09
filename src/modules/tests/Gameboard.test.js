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

test("doesn't place ships out of bounds", () => {
  const gameboard = new Gameboard(3);
  expect(() => gameboard.placeShip(4, 0, 0, true)).toThrow();
});

test("receives attack on empty cell", () => {
  const gameboard = new Gameboard(3);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.playingField[0][0].isHit).toBeTruthy();
});

test("receives attack on cell with ship", () => {
  const gameboard = new Gameboard(3);
  gameboard.placeShip(3, 0, 0, true);
  gameboard.receiveAttack(0, 1);
  const shipCell = gameboard.playingField[0][1];
  expect(shipCell.isHit && shipCell.ship.hits === 1).toBeTruthy();
});

test("sunks ship", () => {
  const gameboard = new Gameboard(3);
  gameboard.placeShip(2, 0, 0, true);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  const ship = gameboard.playingField[0][0].ship;
  expect(ship.hasSunk).toBeTruthy();
});

test('keeps track of ships', () => {
  const gameboard = new Gameboard(3);
  gameboard.placeShip(2, 0, 0, true);
  gameboard.placeShip(1, 2, 0, false);
  gameboard.receiveAttack(2, 0);
  expect(gameboard.amountOfShips).toBe(1);
})

test("doesn't overlap ships vertically or horizontally", () => {
  const gameboard = new Gameboard(3);
  gameboard.placeShip(2, 0, 0, true);
  expect(() => gameboard.placeShip(2, 0, 0, true)).toThrow();
});
