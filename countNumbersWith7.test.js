const countNumbersWith7 = require("./countNumbersWith7");

test("The count of numbers with 7 from 1 to -1 is 0", () => {
  expect(countNumbersWith7(-1)).toBe(0);
});

test("The count of numbers with 7 from 1 to 0 is 0", () => {
  expect(countNumbersWith7(0)).toBe(0);
});

test("The count of numbers with 7 from 1 to 1 is 0", () => {
  expect(countNumbersWith7(1)).toBe(0);
});

test("The count of numbers with 7 from 1 to 7 is 1", () => {
  expect(countNumbersWith7(7)).toBe(1);
});

test("The count of numbers with 7 from 1 to 20 is 2", () => {
  expect(countNumbersWith7(20)).toBe(2);
});

test("The count of numbers with 7 from 1 to 70 is 8", () => {
  expect(countNumbersWith7(70)).toBe(8);
});

test("The count of numbers with 7 from 1 to 100 is 19", () => {
  expect(countNumbersWith7(100)).toBe(19);
});

test("The count of numbers with 7 from 1 to 1000 is 271", () => {
  expect(countNumbersWith7(1000)).toBe(271);
});
