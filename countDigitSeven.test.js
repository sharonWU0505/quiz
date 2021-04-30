const countDigitSeven = require("./countDigitSeven");

test("The number of 7 in integers not larger than -1 is 0", () => {
  expect(countDigitSeven(-1)).toBe(0);
});

test("The number of 7 in integers not larger than 0 is 0", () => {
  expect(countDigitSeven(0)).toBe(0);
});

test("The number of 7 in integers not larger than 1 is 0", () => {
  expect(countDigitSeven(1)).toBe(0);
});

test("The number of 7 in integers not larger than 7 is 1", () => {
  expect(countDigitSeven(7)).toBe(1);
});

test("The number of 7 in integers not larger than 20 is 2", () => {
  expect(countDigitSeven(20)).toBe(2);
});

test("The number of 7 in integers not larger than 70 is 8", () => {
  expect(countDigitSeven(70)).toBe(8);
});

test("The number of 7 in integers not larger than 100 is 20", () => {
  expect(countDigitSeven(100)).toBe(20);
});

test("The number of 7 in integers not larger than 1000 is 300", () => {
  expect(countDigitSeven(1000)).toBe(300);
});
