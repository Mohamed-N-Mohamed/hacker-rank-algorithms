function migratoryBirds(arr) {
  // Write your code here

  //determine the id of the most frequently sighted type

  //if more than 1 type has been spotted that maximum amount, return the smallest of their ids

  arr.sort((a, b) => a - b);

  let birdMatch = {};

  let birdId = 999;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!birdMatch[current]) {
      birdMatch[current] = 1;
    } else {
      birdMatch[current] += 1;
    }
  }

  for (const key in birdMatch) {
    console.log(key, birdMatch[key]);

    if (birdMatch[key] > total) {
      total = birdMatch[key];
      birdId = key;
    } else if (birdMatch[key] === total) {
      if (key < birdId) {
        birdId = key;
      }
    }
  }

  return birdId;
}

migratoryBirds(1, 1, 2, 2, 3);
