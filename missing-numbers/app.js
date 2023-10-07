//brut force method. works for 3 test cases and fails for 1 test case
function missingNumbers(arr, brr) {
  // Write your code here
  let missingNumbers = [];

  for (const number of brr) {
    const index = arr.indexOf(number);

    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      missingNumbers.push(number);
    }
  }

  const answer = missingNumbers.sort((a, b) => a - b);

  console.log(answer);
}

var myArray = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];

var myArray2 = [
  203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
];

missingNumbers(myArray, myArray2);

//this solves the problem.
function missingNumbers(arr, brr) {
  const arrFreq = new Map();
  const brrFreq = new Map();
  const result = [];

  // Count the frequency of numbers in arr
  for (const num of arr) {
    arrFreq.set(num, (arrFreq.get(num) || 0) + 1);
  }

  // Count the frequency of numbers in brr
  for (const num of brr) {
    brrFreq.set(num, (brrFreq.get(num) || 0) + 1);
  }

  // Find missing numbers
  for (const [num, freq] of brrFreq.entries()) {
    if (!arrFreq.has(num) || arrFreq.get(num) < freq) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
}

// Example usage:
const arr = [3696, 3739, 3714, 3719 /* ... */];
const brr = [3670, 3674, 3677, 3684 /* ... */];
const result = missingNumbers(arr, brr);
console.log(result);
