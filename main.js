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

function blurWord(correctWord, unBlurredChars = 3) {
  return correctWord.substring(0, unBlurredChars) + "-".repeat(correctWord.length - unBlurredChars);
}

function main() {
  console.log("H A N G M A N");
  const correctWord = getRandomWord();
  const blurredWord = blurWord(correctWord);

  let userGuess = input(`Guess the word ${blurredWord}: `);
  validateUserGuess(userGuess, correctWord);
}

main();