const count = require("./numberOfKOccurence");

test("should return number elemnts in the array", () => {
  expect(count([], 0, 1)).toStrictEqual(0);
});

test("should return 4 times occurence in the array", () => {
  expect(count([1, 1, 2, 2, 2, 2, 3], 7, 2)).toStrictEqual(4);
});
test("should return 0 times occurence in the array", () => {
  expect(count([1, 1, 2, 2, 2, 2, 3], 7, 4)).toStrictEqual(0);
});
