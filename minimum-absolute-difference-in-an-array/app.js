function minimumAbsoluteDifference(arr) {
  // Write your code here

  let min = 9999999999999999999;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff < min) {
      min = diff;
    }
  }

  return min;
}

minimumAbsoluteDifference([3, -7, 0]);
