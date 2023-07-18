import caesarCipher from "./caesarCipher";

test('test: a -> b', () => {
  expect(caesarCipher('a', 1)).toBe('b');
})

test('test: A -> B', () => {
  expect(caesarCipher('A', 1)).toBe('B');
})

test('test: abc -> cde', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
})

test('test: z -> a', () => {
  expect(caesarCipher('z',1)).toBe('a');
})

test('test: Z -> A', () => {
  expect(caesarCipher('Z', 1)).toBe('A');
})

test('test: a -> a', () => {
  expect(caesarCipher('a', 26)).toBe('a');
})

test('test: aAbBzZ -> bBcCaA', () => {
  expect(caesarCipher('aAbBzZ', 1)).toBe('bBcCaA');
})
