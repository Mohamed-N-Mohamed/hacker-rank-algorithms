function sockMerchant(n, ar) {
  //n = number of socks
  //arr = the colors of each sock
  // Given an array of integers representing the color of each sock
  //determine how many pairs of socks with matching colors there are
  let match = 0;
  ar.sort();

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      match++;
      i++;
    }
  }

  return match;
}

sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
