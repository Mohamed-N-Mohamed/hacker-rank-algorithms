function balancedSums(arr) {
  // Write your code here

  //method 1
  let left = 0;

  let right = arr.reduce((acc, curr) => acc + curr, 0);

  for (element of arr) {
    right -= element;
    if (left === right) {
      return "YES";
    }
    left += element;
  }
  return "NO";

  // method 2
  // let total = 0;
  // let right = 0;

  // for (let element of arr) {
  //   total += element;
  // }

  // for (let element of arr) {
  //   total = total - element;
  //   if (total === right) {
  //     console.log("yes");
  //   }
  //   right += element;

  //   console.log("NO");
  // }
}

console.log(balancedSums([1, 2, 3, 3]));
