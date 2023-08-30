function caesarCipher(s, k) {
  // Write your code here
  const splitWords = s.split("");
  const diff = k % 26;

  const newWords = splitWords.map((letter) => {
    let asci = letter.charCodeAt(0);

    if (asci >= 65 && asci <= 90) {
      if (asci + diff > 90) {
        asci = asci - 26 + diff;
      } else {
        asci = asci + diff;
      }
    }

    if (asci >= 97 && asci <= 122) {
      if (asci + diff > 122) {
        asci = asci - 26 + diff;
      } else {
        asci = asci + diff;
      }
    }

    return String.fromCharCode(asci);
  });

  const answer = newWords.join("")
    
  return answer
}

caesarCipher("6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr", 2);
