function pickingNumbers(a) {
  // Write your code here
  let array = new Array(a.length).fill(0);
  let max = 0;

  for (let i = 0; i < a.length; i++) {
    array[a[i]]++;
  }

  for (let i = 0; i < a.length; i++) {
    if (array[i] + array[i + 1] > max) {
      max = array[i] + array[i + 1];
    }
  }

  return max;
}

pickingNumbers([4, 6, 5, 3, 3, 1]);
