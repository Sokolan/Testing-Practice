import calculator from "./calculator";

test('test add: 5 + 10 = 15', () => {
  expect(calculator.add(5, 10)).toBe(15);
});

test('test add: 2 + (-1) = 1', () => {
  expect(calculator.add(2, -1)).toBe(1);
});

test('test add: 0 + 0 = 0', () => {
  expect(calculator.add(0,0)).toBe(0);
})

test('test add: 0.1 + 0.2 = 0.3', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})