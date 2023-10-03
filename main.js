// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const possibleWords = ["python", "java", "swift", "javascript"];

function getRandomWord() {
  const index = Math.floor(Math.random() * possibleWords.length);
  return possibleWords[index];
}
function blurWord(word) {
  return "-".repeat(word.length);
}
function uncoverLetters(blurredWord, letterIndexes, letter) {
  const blurArray =  [...blurredWord];
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

function validateUserLetter(letter, guessedLetters) {
  if (letter.length !== 1) {
    return "Please, input a single letter.";
  }
  if (!/[a-z]/.test(letter)) {
    return "Please, enter a lowercase letter from the English alphabet.";
  }
  if (guessedLetters.includes(letter)) {
    return "You've already guessed this letter.";
  }
  return "";
}

function runGame(attempts) {
  const correctWord = getRandomWord();
  let blurredWord = blurWord(correctWord);
  const guessedLetters = [];
  let win = false;

  do {
    console.log(blurredWord);
    const letter = input(`Input a letter: `);
    
    const validationErrorMsg = validateUserLetter(letter, guessedLetters);
    if (validationErrorMsg) {
      console.log(validationErrorMsg + "\n");
      continue;
    }

    const letterIndexes = findLetterIndexes(correctWord, letter);
    if (letterIndexes.length > 0) {
        blurredWord = uncoverLetters(blurredWord, letterIndexes, letter);
        if (!blurredWord.includes("-")) {
          win = true;
          break;
        }
    } else {
      console.log("That letter doesn't appear in the word.");
      attempts--;
    }
    guessedLetters.push(letter);

    console.log();
  } while (attempts > 0);

  if (win) {
    console.log(`\nYou guessed the word ${correctWord}!`);
    console.log("You survived!");
  } else {
    console.log("You lost!");
  }
}

function main() {
  console.log("H A N G M A N\n");
  let attempts = 8;

  runGame(attempts);
}

main();