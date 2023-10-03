// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const possibleWords = ["python", "java", "swift", "javascript"];

function getRandomWord() {
  const index = Math.floor(Math.random() * possibleWords.length);
  return possibleWords[index];
}

function validateUserGuess(userGuess) {
  if (userGuess === getRandomWord()) {
    console.log("You survived!");
  } else {
    console.log("You lost!");
  }
}

function main() {
  console.log("H A N G M A N");

  let userGuess = input("Guess the word: ");
  validateUserGuess(userGuess);
}

main();