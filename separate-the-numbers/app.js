function separateNumbers(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const startString = s.slice(0, i);
    let number = BigInt(startString);
    let str = startString;

    while (str.length < s.length) {
      number = number + 1n;
      str += number.toString();
    }

    if (str === s) {
      console.log("YES " + startString);
      return; 
    }
  }


  console.log("NO");
}

separateNumbers("12345");
