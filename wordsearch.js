// SCOPE:
// * ensure each first layer array contains a word before reporting true or false
// * ensure the test cases for the vertical word also pass.
// * ensure the test cases for the vertical word pass for top down and bottom up.

// INPUT:
// 2D-Array and a string

// OUTPUT:
// * Boolean result

const wordSearch = (letters, word) => {
  let horizontalResult;
  let rotatedArray = flippingFunction(letters);
  const horizontalJoinNormal = letters.map(ls => ls.join(''));
  const horizontalJoinClockwise1 = rotatedArray.map(ls => ls.join(''));

  if (horizontalJoinNormal.includes(word) || horizontalJoinClockwise1.includes(word)) {
    horizontalResult = true;
  } else {
    horizontalResult = false;
  }
  return horizontalResult;
}

const flippingFunction = (letters) => {
  let tempStorage = {};
  for (let array of letters) {
    for (let [index, element] of Object.entries(array)) {
      if (!Array.isArray(tempStorage[index])) {
        tempStorage[index] = [];
      };
      tempStorage[index].push(element);
    }
  }
  let values = Object.values(tempStorage);
  // console.log("LINE 43: ", values);
  return values;
}

// if key === loop iterant push to array at loop iterant

/*
console.log(multidimensionalRotateFunction([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // ['A','S','Y','H','W','B','O','E'] - first rotation
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], // ['E','O','B','W','H','Y','S','A'] - second rotation exp
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], // ['A','W','C','F','Q','U','A','L'] - actual
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']]
))
*/


module.exports = wordSearch

/**[
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // 0: [A','S','Y','H','W','B','U','O','E']
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], // 1: [W','E','F','M','H','F','B','D','Z']
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], // CICJCRTCK
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'], // FNFTSEWAF
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'], // QFQEYNAKQ
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'], // UEUVEEPUU
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'], // ALARRYAAA
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'], // LDLDGBISL
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]
 */

// by git hub users @taomosquito @Rusgyn