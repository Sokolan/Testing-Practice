import calculator from "./calculator";

test('test: 10 / 2 = 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
})

test('test: no division by 0', () => {
  expect(calculator.divide(10, 0)).toBe(undefined);
})

test('test: 10 / 3 = 3.3333...', () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.3333)
})