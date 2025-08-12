const reverseArrayInGroupFunc = require("./reverseArrayInGroup");

const arr = [36, 93, 64, 48, 96, 55, 70, 0];
console.log("test file", reverseArrayInGroupFunc(arr, 8, 3));

test("should return empty array", () => {
  expect(reverseArrayInGroupFunc([], 0, 0)).toStrictEqual([]);
});

test("should return same length value", () => {
  expect(reverseArrayInGroupFunc(arr, 8, 3).length).toBe(8);
});

test("shoud return reversed element with 3 numbers", () => {
  expect(reverseArrayInGroupFunc(arr, 8, 3)).toStrictEqual([
    64,
    93,
    36,
    55,
    96,
    48,
    0,
    70
  ]);
});
