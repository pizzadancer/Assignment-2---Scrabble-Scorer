// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

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



/*

 for (let char of userWord) {
      console.log(char)
   }

   
*/

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
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
*/
let vowelBonusScore = function (userWord) {
   let score = userWord.length;
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

}

const scoringAlgorithms = [];

function scorerPrompt() { }

function transform() { };

let newPointStructure;

function runProgram() {
   let userWord = initialPrompt();
   // console.log(oldScrabbleScorer(userWord))
   // console.log(simpleScore(userWord));
   // console.log(`In Old Scrabble Score : ${oldScrabbleScorer(userWord)}`);
   console.log(`In Simple Score : ${simpleScore(userWord)}`);
   console.log(`In Vowel Bonus Score : ${vowelBonusScore(userWord)}`);



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

