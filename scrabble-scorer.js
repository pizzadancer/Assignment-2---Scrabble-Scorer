// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
const chalk = require("chalk");
const headings = chalk.bold.hex("#FFA500");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log(headings("Let's play some scrabble!\n"));
   return input.question("Please enter a word: ");
};
/*
   Simple Score	Each letter is worth 1 point.	A function with a parameter for user input that returns a score.
*/
let simpleScore = function (userWord) {
   return userWord.length;
};
/*
   Bonus Vowels	Vowels are 3 pts, consonants are 1 pt.	A function that returns a score based on the number of vowels and consonants.
      Adds the simple score as the baseline
      Declares an isVowel() mapping function which checks if the char is a vowel or not
      Loop: through userWord and if the char in userWord is a vowel, add the 2 remaining points as a bonus
*/
let vowelBonusScore = function (userWord) {
   let score = simpleScore(userWord);
   let isVowel = char => ["a", "e", "i", "o", "u"].includes(char);
   for (let char of userWord) {
      if (isVowel(char)) {
         score += 2;
      }
   }
   return score
};

/*
   Scrabble	The traditional scoring algorithm.	Uses the oldScrabbleScorer() function to determine the score for a given word.
*/
let scrabbleScore = function (userWord) {
   transform(oldPointStructure);
   userWord = userWord.toUpperCase();
   // console.log(userWord)
   // console.log(newPointStructure[userWord[0]])
   let score = 0;
   for (let letter of userWord) {
      let soloLetterScore = newPointStructure[letter];
      score += soloLetterScore;
      // console.log(letter);
   }
   return score;


   // cycle through the entire userWord
   // for every letter find the score from the newPointStructure
   // return the total accumulated score
}


// Create an array of objects with a name, description, and scoringFunction.
const scoringAlgorithms = [
   // [simpleScore, vowelBonusScore, scrabbleScore];
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scoringFunction: simpleScore
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoringFunction: vowelBonusScore
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scoringFunction: scrabbleScore
   }
]
/*
   Which scoring algorithm would you like to use?

   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: 0
*/
function scorerPrompt() {
   console.log(`Which scoring algorithm would you like to use?\n
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system\n`);
   return input.question("Enter 0, 1, or 2: ");
}

function transform(oldPointStructure) {
   for (let property in oldPointStructure) {
      // console.log(`${property}: ${oldPointStructure[property]}`);
      for (let letter of oldPointStructure[property]) {
         // console.log(letter);
         newPointStructure[letter] = Number(property);
      }
   }
   return newPointStructure;
};

let newPointStructure = {};

function runProgram() {


   let userWord = initialPrompt();
   let algorithmChoice = Number(scorerPrompt());
   // console.log(oldScrabbleScorer(userWord))
   // console.log(simpleScore(userWord));
   // console.log(`In Old Scrabble Score : ${oldScrabbleScorer(userWord)}`);
   // console.log(`In Simple Score : ${simpleScore(userWord)}`);
   // console.log(`In Vowel Bonus Score : ${vowelBonusScore(userWord)}`);

   // console.log(`In Scrabble Score : ${scrabbleScore(userWord)}`);
   let finalScore = scoringAlgorithms[algorithmChoice].scoringFunction(userWord);
   console.log(chalk.blue((`Score for '${userWord}': ${finalScore}`)));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};

