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

function runGame(attempts) {
  const correctWord = getRandomWord();
  let blurredWord = blurWord(correctWord);
  const guessedLetters = [];
  let win = false;

  do {
    console.log(blurredWord);
    const letter = input(`Input a letter: `);

    const letterIndexes = findLetterIndexes(correctWord, letter);
    if (letterIndexes.length > 0) {
      if (guessedLetters.some(l => l === letter)) {
        console.log("No improvements.");
        attempts--;
      } else {
        blurredWord = uncoverLetters(blurredWord, letterIndexes, letter);
        if (blurredWord.indexOf("-") === -1) {
          win = true;
          break;
        }
      }
    } else {
      console.log("That letter doesn't appear in the word.");
      attempts--;
    }
    guessedLetters.push(letter);

    console.log();
  } while (attempts > 0);

  if (win) {
    console.log("\n" + correctWord);
    console.log("You guessed the word!");
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