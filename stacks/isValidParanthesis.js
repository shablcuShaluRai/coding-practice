function isValid(str) {
  let start = 0,
    last = str.length - 1;
  const bracketObj = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  // start = 0, 1
  //last = 7, 6
  while (start <= last) {
    // "}" === "}"
    if (bracketObj[str[start]] === str[last]) {
      last--; //7, 6 ,5, 4, 3
      start++; //0, 1, 2, 3, 4
    } else {
      return false;
    }
  }
  return true;
}

console.log("isValid", isValid("{[()]}"));
