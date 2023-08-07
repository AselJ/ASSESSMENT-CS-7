// Sum Zero
function addToZero(arrNumbers){
  for(let i = 0; i < array.length; i++) {
    console.log(array[i])
    for(let j = i+1; j< array.length; j++) {
        if(array[i] + array[j] === 0) {
            return true;
        }
    }
}
return false;
}
//console.log(addToZero([]));
// -> False

//console.log(addToZero([1]));
// -> False

//console.log(addToZero([1, 2, 3]));
// -> False

//console.log(addToZero([1, 2, 3, -2]));
// -> True

// Time 2n → O(n) Space Linear O(n)
  

// Unique Characters

function hasUniqueChars(string) {
  const map = {};
  for(let i = 0; i < string.length; i++) {
      if(string[i] in map) {
          return false;
      } else {
          map[string[i]] = string[i]; 
      }
  }
  return true;
}
// console.log(hasUniqueChars("Monday"));
// -> True

// console.log(hasUniqueChars("Moonday"));
// -> False

//Space complexity is O(n)-Linear


// Pangram Sentence

function isPangram(sentence) {
  let lettersCount = 26;
  const letters = {
      a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false, k:false, l:false, m: false, n: false, o: false, p: false, q: false, r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false 
  };
  for (let i = 0; i < sentence.length; i++) {
      const lowerCaseLetter = sentence[i].toLowerCase();
      if(letters[lowerCaseLetter] == false) {
          letters[lowerCaseLetter] = true;
          lettersCount--;
      }
  }
  return lettersCount === 0;
}
//console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// space complexity - O(1)Constant

// Longest Word

function findLongestWord(array) {
  let longestWord = '';
  for(let i = 0; i < array.length; i++) {
      if(array[i].length > longestWord.length) {
          longestWord = array[i];
      }
  }
  return longestWord;
}

const longestWord = findLongestWord(["hi", "hello"]);
// console.log(longestWord);

//Space conplexity - O(1) Constant