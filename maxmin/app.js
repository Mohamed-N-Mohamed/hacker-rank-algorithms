function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let smallest = Infinity;

  arr.forEach((el, index) => {
    let array = arr[k + index - 1] - el;

    if (array < smallest) {
      smallest = array;
    }
  });

  return smallest;
}
maxMin(2, [1, 4, 7, 2]);
