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
// https://www.codecademy.com/forum_questions/5575df34937676a0b50000e8#:~:text=Answer%20557617aae0a300f2cf000609&text=prompt()%20always%20returns%20a,'string'%20and%20not%20null%20.



// ####

// // Prompt the user to guess my favorite number

// let questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);

// if(questionSix < 12){
  //   guessLimit--;
  //   questionSix = prompt('Too low. What\'s you next guess?');
  // }else if(questionSix > 12){
    //   guessLimit--;
    //   questionSix = prompt('Too high. What\'s you next guess?');
    // // If the correct number is guessed, alert the user with a message to let them know they are correct.
    // }else if(questionSix === '12'){
      //   alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
      // }
      
      // if(questionSix < 12){
        //   guessLimit--;
        //   questionSix = prompt('Too low. What\'s you next guess?')
        // }else if(questionSix > 12){
          //   guessLimit--;
          //   questionSix = prompt('Too high. What\'s you next guess?')
          // }else if(questionSix === '12'){
            //   alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
            // }
            
            // if(questionSix < 12){
              //   guessLimit--;
              //   questionSix = prompt('Too low. What\'s you next guess?');
              // }else if(questionSix > 12){
                //   guessLimit--;
                //   questionSix = prompt('Too high. What\'s you next guess?');
                // }else if(questionSix === '12'){
                  //   alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
                  // }
                  
                  // #### 
                  
// Define a variable for the maximum number of guesses (4)
let guessLimit = 4;

// Define the variable for your favorite number. (12)
let favNum = '12';

// Define a variable for wrong guesses called correctNumber that is False so that you can set up a while loop to end the game when either guesses have run out, or when the faveNum is correctly guessed.
let correctNumber = false;

let questionSix;

while(guessLimit > 0 && correctNumber === false){
  console.log(guessLimit);
  if (guessLimit === 4){
    questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);
    console.log('I\'m asking the first question')
  } else if (questionSix < 12){
    console.log(guessLimit);
    console.log('I\'m asking a question')
    questionSix = prompt('Too low. What\'s you next guess?');
  } else if (questionSix > 12){
    questionSix = prompt('Too high. What\'s you next guess?');
  } else if (questionSix === '12'){
    alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
    correctNumber = true;
  }
  guessLimit--;
}

// 1. correctNumber = true
// 2 guessLimit = 0

// When the correct number is guessed, correctNumber = true
// // }



// }

//   let questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);
//   guessLimit--;
// }










// The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands. Because we have defined 'use strict' at the top of the .js document, it is necessary to define favNum as a string, because when the user inputs the number 12 into the prompt, it will be received as a sting, not a number.
// let guessNum = 4


