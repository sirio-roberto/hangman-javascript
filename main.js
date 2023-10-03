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

  do {
    console.log("\n" + blurredWord);
    const letter = input(`Input a letter: `);
    
    const validationErrorMsg = validateUserLetter(letter, guessedLetters);
    if (validationErrorMsg) {
      console.log(validationErrorMsg);
      continue;
    }

    const letterIndexes = findLetterIndexes(correctWord, letter);
    if (letterIndexes.length > 0) {
        blurredWord = uncoverLetters(blurredWord, letterIndexes, letter);
        if (!blurredWord.includes("-")) {
          console.log(`\nYou guessed the word ${correctWord}!`);
          console.log("You survived!");
          return 1;
        }
    } else {
      console.log("That letter doesn't appear in the word.");
      attempts--;
    }
    guessedLetters.push(letter);
  } while (attempts > 0);

  console.log("You lost!");
  return -1;
}

function main() {
  let wins = 0;
  let loses = 0;

  console.log("H A N G M A N");

  do {
    let userChoice = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
    if (userChoice === "exit") {
      break;
    }
    if (userChoice === "play") {
      let attempts = 8;
      const result = runGame(attempts);
      if (result === 1) {
        wins++;
      } else {
        loses++;
      }
    } else if (userChoice === "results") {
      console.log(`You won: ${wins} times.`);
      console.log(`You lost: ${loses} times.`);
    }
  } while (true);
}

main();