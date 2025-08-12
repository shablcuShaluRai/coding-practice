// This is a functional problem . Your task is to return the product of array elements under a given modulo.
// The modulo operation finds the remainder after division of one number by another. For example, K(mod(m))=K%m= remainder obtained when K is divided by m.

// Input:

// The first line of input contains T denoting the number of testcases.Then each of the T lines contains a single positive integer N denotes number of element in array. Next line contain 'N' integer elements of the array.

// Output:

// Return the product of array elements under a given modulo.
// That is, return (Array[0]*Array[1]*Array[2]...*Array[n])%modulo.

// 1

// 4

// 1 2 3 4
// not working here
function product(arr, n, mod) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
    product = product % (Math.pow(10, 9) + 7);
  }
  const result = product % mod;
  return result;
}

console.log("product result", product([1, 2, 3, 4], 4, 100007));
