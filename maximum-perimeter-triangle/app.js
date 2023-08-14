function maximumPerimeterTriangle(sticks) {
  // Write your code here
  /*Given an array of stick lengths, use  of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as  integers in non-decreasing order. */

  let triangle = [];
  let max = 0;

  const sorted = sticks.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      for (let k = j + 1; k < sorted.length; k++) {
        let current = 0;
        if (sorted[i] + sorted[j] > sorted[k]) {
          current = sorted[i] + sorted[j] + sorted[k];
        }

        if (current > max) {
          max = current;
          triangle = [sorted[i], sorted[j], sorted[k]];
        }
      }
    }
  }

  if (max !== 0) {
    return triangle;
  } else {
    return -1;
  }
}

maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]);
