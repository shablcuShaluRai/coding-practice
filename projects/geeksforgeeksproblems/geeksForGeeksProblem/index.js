const arr = [
  {
    id: 12,
    name: "Ram"
  },
  {
    id: 32,
    name: "Shyam"
  }
];

function findNameByID(arr, id) {
  const res = arr.filter((ar) => ar.id === id)[0];
  return res.name;
}

console.log("find", findNameByID(arr, 32));

var obj = { "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 };

// Using Object.entries() function
// to convert an Object {} to an
// Array [] of key-value pairs
var result = Object.entries(obj);

console.log("result", result);
