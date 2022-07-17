// 'use strict';

// let userName = prompt('Please type your preferred name');
// // console.log(userName);

// alert(`Hello ${userName}! It's great to meet you! Please continue to play a short guessing game about Stephen Clemmer`);

// let score = 0;


// firstQuestion();
// secondQuestion();
// thirdQuestion();
// fourthQuestion();
// fifthQuestion();
// sixthQuestion();
// seventhQuestion();




// function firstQuestion(){
//   let questionOne = prompt('Answer "yes" or "no": Does Stephen Clemmer love coding?').toLowerCase();

//   if (questionOne === 'yes' || questionOne === 'y'){alert(`That's right ${userName}!, Stephen Clemmer loves coding because it allows him to work on interesting problems and meet interesting people!`);
//     score++;
//   } else {
//     alert(`I'm sorry, ${userName}, but you're incorrect. Stephen Clemmer LOVES to code!`);
//   }
//   alert(`Your score is ${score} out of 1.`);
// }

// function secondQuestion(){
//   let questionTwo = prompt('Answer "yes" or "no": Has Stephen worked with Grammy Award winning artists?').toLowerCase();
  
//   if (questionTwo === 'yes' || questionTwo === 'y'){
//     alert(`That's right ${userName}! Stephen served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
//     score++;
//   } else {
//     alert(`Sorry, ${userName} but Stephen has been very fortunate. He served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
//   }
//   alert(`Your score is ${score} out of 2.`);
// }

// function thirdQuestion(){
//   let questionThree = prompt('Answer "yes" or "no": Is Stephen a pest control expert?').toLowerCase();
//   // console.log(questionThree);
//   if (questionThree === 'yes' || questionThree === 'y'){
//     alert(`That's right ${userName}! Stephen is an expert in insect and rodent pest control. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
//     score++
//   } else {
//     alert(`Sorry, ${userName} but Stephen is an insect and rodent pest control expert. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
//   }
//   alert(`Your score is ${score} out of 3.`);
// }

// function fourthQuestion(){
//   let questionFour = prompt('Answer "yes" or "no": Does Stephen love to cook and eat?').toLowerCase();
//   // console.log(questionFour);
//   if (questionFour === 'yes' || questionFour === 'y'){
//     alert(`That's right ${userName}! The only thing Stephen loves more than cooking food is eating it. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
//     score++;
//   } else {
//     alert(`Sorry, ${userName} but the only thing Stephen loves more than cooking is eating. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
//   }
//   alert(`Your score is ${score} out of 4.`);
// }

// function fifthQuestion(){
//   let questionFive = prompt('Answer "yes" or "no": Does Stephen like playing soccer?').toLowerCase();
//   // console.log(questionFive);
//   if (questionFive === 'no' || questionFive === 'n'){
//     alert(`That's right ${userName}! Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
//     score++;
//   } else {
//     alert(`Sorry, ${userName} but Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
//   }
//   alert(`Your score is ${score} out of 5.`);
// }

// // Start of Lab 03
// // https://www.codecademy.com/forum_questions/5575df34937676a0b50000e8#:~:text=Answer%20557617aae0a300f2cf000609&text=prompt()%20always%20returns%20a,'string'%20and%20not%20null%20.


// function sixthQuestion(){
// // Define a variable for the maximum number of guesses (4)
//   let guessLimit = 4;

//   // Define the variable for your favorite number. (12)
//   let favNum = '12';

//   // Define a variable for wrong guesses called correctNumber that is False so that you can set up a while loop to end the game when either guesses have run out, or when the faveNum is correctly guessed.
//   let correctNumber = false;

//   let questionSix;


//   while(guessLimit > 0 && correctNumber === false){
//     if (guessLimit === 4){
//       questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);
//     } else if (questionSix < 12){
//       questionSix = prompt('Too low. What\'s you next guess?');
//     } else if (questionSix > 12){
//       questionSix = prompt('Too high. What\'s you next guess?');
//     } else if (questionSix === '12'){
//       // totalScore++
//       alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
//       correctNumber = true;
//       score++;

//     }
//     guessLimit--;
//   }

//   if(guessLimit === 0){
//     alert('Nice try. Here\'s the answer. Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
//   }
//   alert(`Your score is ${score} out of 6.`);
// }

// // 1. correctNumber = true
// // 2 guessLimit = 0

// // When the correct number is guessed, correctNumber = true
// // // }

// // The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands. Because we have defined 'use strict' at the top of the .js document, it is necessary to define favNum as a string, because when the user inputs the number 12 into the prompt, it will be received as a sting, not a number.
// // let guessNum = 4


// // // Question Seven for Lab 3

// function seventhQuestion(){
// // Make array with possible favorite animal answers
//   let favAnimal = ['tiger', 'dog', 'rat', 'meerkat'];

//   // Create a (slow) for-loop to create six attempts to answer.

//   for(let i = 0; i < 6; i++){
//     // create the initial prompt. Putting it inside of the loop will help avoid the question from being asked an additional time after the loop breaks.
//     let questionSeven = prompt(`${userName}, can you guess one of Stephen's favorite animals in six guesses or less?`).toLowerCase();
//     // create a fast for-loop to cycle through the length of the array to compare each questionSeven guess to each item in the array. j=0; as long as j is less than the length of the favAnimal array...
//     for(let j = 0; j < favAnimal.length; j++){
//       // ...compare the guess to the corresponding item in the array, and if it returns a strictly true answer...
//       if(questionSeven === favAnimal[j]){
//         // ...do the following. Otherwise, increment i.
//         alert('You got it! I love that animal!');
//         score++;
//         i = 6;
//         break;
//       }
//     }
//   //After these for loops have finished, let the user know what all of the possible answers could have been. Then alert them to their updated score.
//   } alert (`These were all of the possible guesses ${favAnimal}`);
//   alert(`Your score is ${score} out of 7.`);
// }
