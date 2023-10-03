// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const possibleWords = ["python", "java", "swift", "javascript"];

function getRandomWord() {
  const index = Math.floor(Math.random() * possibleWords.length);
  return possibleWords[index];
}

function validateUserGuess(userGuess, correctWord) {
  if (userGuess === correctWord) {
    console.log("You survived!");
  } else {
    console.log("You lost!");
  }
}

function blurWord(word) {
  return "-".repeat(word.length);
}
function uncoverLetters(blurredWord, letterIndexes, letter) {
  const blurArray = Array.from(blurredWord);
  letterIndexes.forEach(i => blurArray[i] = letter);
  return blurArray.join("");
}

function findLetterIndexes(word, letter) {
  const indexes = [];

  let currentIndex = word.indexOf(letter);

  while (currentIndex !== -1) {
    indexes.push(currentIndex);
    currentIndex = word.indexOf(letter, currentIndex + 1);
  }

  return indexes;
}

function runGame(attempts) {
  const correctWord = getRandomWord();
  let blurredWord = blurWord(correctWord);

  do {
    console.log(blurredWord);
    const letter = input(`Input a letter: `);

    const letterIndexes = findLetterIndexes(correctWord, letter);
    if (letterIndexes.length > 0) {
      blurredWord = uncoverLetters(blurredWord, letterIndexes, letter);
    } else {
      console.log("That letter doesn't appear in the word.");
    }

    console.log();
    attempts--;
  } while (attempts > 0);
}

function main() {
  console.log("H A N G M A N\n");
  let attempts = 8;

  runGame(attempts);

  console.log("Thanks for playing!");
}

main();