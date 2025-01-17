// Worked in pair with Gerard

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  //   console.log("horizontal array", horizontalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // Transpose array to target vertical letters:
  const transpose = array => array[0].map((col, i) => array.map(row => row[i]));
  const transposedLetters = transpose(letters);
  
  //   console.log("Transposed array", transposedLetters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

  //   console.log(verticalJoin);
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  //   If word not found horizontal or vertical; return false:
  return false;
};

// const result = wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'Abbott');

// console.log("result", result);

module.exports = wordSearch;