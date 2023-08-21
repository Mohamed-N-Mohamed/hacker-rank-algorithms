function closestNumbers(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let answer = [];

  let min = 999;

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff < min) {
      min = diff;
      answer = [arr[i], arr[i + 1]];
    } else if (diff === min) {
      answer = [...answer, arr[i], arr[i + 1]];
    }
  }
  return answer;
}

closestNumbers([
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
]);
