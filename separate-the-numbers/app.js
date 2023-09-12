function separateNumbers(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const startString = s.slice(0, i);
    let number = BigInt(startString);
    let str = startString;

    while (str.length < s.length) {
      number = number + 1n; // Increment as a BigInt
      str += number.toString(); // Convert BigInt to string and append
    }

    if (str === s) {
      console.log("YES " + startString);
      return; // Exit the function once a beautiful sequence is found
    }
  }

  // If no beautiful sequence is found, print "NO"
  console.log("NO");
}

separateNumbers("12345");
