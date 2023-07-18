import reverseString from "./reverseString";

test("ab is equal to ba", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("abc is equal to cba", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("empty string", () => {
  expect(reverseString("")).toBe("");
});
