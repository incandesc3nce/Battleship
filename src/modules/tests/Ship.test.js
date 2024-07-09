import Ship from "../classes/Ship";

test("increases hits", () => {
  const ship = new Ship(4);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("sinks ship when hits are equal to length", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  ship.isSunk();
  expect(ship.hasSunk).toBe(true);
});

test("doesn't sink ship when hits are not equal to length", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.isSunk();
  expect(ship.hasSunk).toBe(false);
});
