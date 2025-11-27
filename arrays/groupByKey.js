/**
 * Given an array
 * [{
 *     "date": "JAN",
 *     "value": 5,
 *     "weight": 3
 * }, {
 *     "date": "JAN",
 *     "value": 4,
 *     "weight": 23
 * }, {
 *     "date": "FEB",
 *     "value": 9,
 *     "weight": 1
 * }, {
 *     "date": "FEB",
 *     "value": 10,
 *     "weight": 30
 * }]
 * and a key 'date'
 * transform it into following output:
 *  [{
 *      "date": "JAN",
 *      "value": [5, 4],
 *      "weight": [3, 23]
 *  }, {
 *      "date": "FEB",
 *      "value": [9, 10],
 *      "weight": [1, 30]
 *  }]
 **/

const transform = (arr, primaryKey) => {
  const result = arr.reduce((acc, cum) => {
    const index = acc.findIndex(
      (value) => value[primaryKey] === cum[primaryKey]
    );
    const keysArr = Object.keys(cum);
    if (index === -1) {
      keysArr.forEach((key) => {
        if (key !== primaryKey) {
          cum[key] = [cum[key]];
        }
      });
      acc.push(cum);
    } else {
      keysArr.forEach((key) => {
        if (key !== primaryKey) {
          acc[index][key].push(cum[key]);
        }
      });
    }
    return acc;
  }, []);
  return result;
};

console.log(
  "output 1",
  transform(
    [
      { date: "JAN", value: 5, weightage: 9, dt: 10 },
      { date: "JAN", value: 2, weightage: 19 },
      { date: "FEB", value: 9, weightage: 1, dt: 60 },
      { date: "FEB", value: 10, weightage: 29 }
    ],
    "date"
  )
);
console.log(
  "output 2",
  transform(
    [
      { date: "JAN", value: 5, weightage: 9 },
      { date: "JAN", value: 5, weightage: 19 },
      { date: "FEB", value: 9, weightage: 1 },
      { date: "FEB", value: 10, weightage: 29 }
    ],
    "date"
  )
);
