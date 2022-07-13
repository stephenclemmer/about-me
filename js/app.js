'use strict';

let userName = prompt('Please type your preferred name');
// console.log(userName);
alert(`Hello ${userName}! It's great to meet you! Please continue to play a short guessing game about Stephen Clemmer`);

// let questionOne = prompt('Answer "yes" or "no": Does Stephen Clemmer love coding?').toLowerCase();
// // console.log(questionOne);
// if (questionOne === 'yes' || questionOne === 'y'){alert(`That's right ${userName}!, Stephen Clemmer loves coding because it allows him to work on interesting problems and meet interesting people!`);
// } else {
//   alert(`I'm sorry, ${userName}, but you're incorrect. Stephen Clemmer LOVES to code!`);
// }

// let questionTwo = prompt('Answer "yes" or "no": Has Stephen worked with Grammy Award winning artists?').toLowerCase();
// // console.log(questionTwo);
// if (questionTwo === 'yes' || questionTwo === 'y'){
//   alert(`That's right ${userName}! Stephen served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
// } else {
//   alert(`Sorry, ${userName} but Stephen has been very fortunate. He served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
// }

// let questionThree = prompt('Answer "yes" or "no": Is Stephen a pest control expert?').toLowerCase();
// // console.log(questionThree);
// if (questionThree === 'yes' || questionThree === 'y'){
//   alert(`That's right ${userName}! Stephen is an expert in insect and rodent pest control. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
// } else {
//   alert(`Sorry, ${userName} but Stephen is an insect and rodent pest control expert. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
// }

// let questionFour = prompt('Answer "yes" or "no": Does Stephen love to cook and eat?').toLowerCase();
// // console.log(questionFour);
// if (questionFour === 'yes' || questionFour === 'y'){
//   alert(`That's right ${userName}! The only thing Stephen loves more than cooking food is eating it. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
// } else {
//   alert(`Sorry, ${userName} but the only thing Stephen loves more than cooking is eating. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
// }

// let questionFive = prompt('Answer "yes" or "no": Does Stephen like playing soccer?').toLowerCase();
// // console.log(questionFive);
// if (questionFive === 'no' || questionFive === 'n'){
//   alert(`That's right ${userName}! Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
// } else {
//   alert(`Sorry, ${userName} but Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
// }

// Start of Lab 03
const favNum = '12';
// The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands. Because we have defined 'use strict' at the top of the .js document, it is necessary to define favNum as a string, because when the user inputs the number 12 into the prompt, it will be received as a sting, not a number.

let questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);
console.log(questionSix);
if (questionSix === favNum){
  alert(`You got it! ${userName}! Stephen's favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!`);
} else if (questionSix < 12){
  alert (`Sorry, ${userName}, your guess is too low. Try again!`);
} else if (questionSix > 12){
  alert (`Sorry, ${userName}, your guess is too high. Try again!`);
}