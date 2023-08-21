function rotateLeft(d, arr) {
  // Write your code here

  console.log(arr);
  let copy = arr.slice();

  for (let i = 0; i < d; i++) {
    let front = copy.shift();
    copy.push(front);
  }

  return copy;
}

rotateLeft([1, 2, 3, 4, 5]);
