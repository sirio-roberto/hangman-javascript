# Hangman Game

A simple Hangman game implemented in Node.js. Try to guess the hidden word by entering one letter at a time. You have a limited number of attempts to solve the puzzle.

## Getting Started

1. Clone this repository to your local machine:
    ```
   git clone git@github.com:sirio-roberto/hangman-javascript.git
   ```

2. Navigate to the project directory:
    ```
   cd hangman-game
   ```

3. Install the required dependencies:
    ```
   npm install
   ```

4. Start the game:
    ```
   node hangman.js
   ```

## How to Play

- To input a letter, use the `input()` function.
- If you want to print some text before requesting input, use the `input(str)` function.
- You will need this input mechanism throughout the game.

## Gameplay

- You have a limited number of attempts to guess the hidden word.
- The game will randomly select a word from a predefined list.
- You'll see a blurred representation of the word with dashes for unknown letters.
- Input a single lowercase letter from the English alphabet to guess.
- You cannot guess the same letter more than once.
- If the letter is in the word, it will be revealed; otherwise, you'll lose an attempt.
- If you guess all the letters correctly, you win the game.
- If you run out of attempts before guessing the word, you lose.

## Commands

- Type `play` to start a new game.
- Type `results` to view your game results.
- Type `exit` to quit the game.

## Game Results

- You can view your game results at any time by typing `results`.
- The scoreboard will display the number of games won and lost.