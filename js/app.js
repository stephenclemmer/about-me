'use strict';

let userName = prompt('Please type your preferred name');

alert(`Hello ${userName}! It's great to meet you! Please continue to play a short guessing game about Stephen Clemmer`);

let score = 0;


firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();


function firstQuestion(){
  let questionOne = prompt('Answer "yes" or "no": Does Stephen Clemmer love coding?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y'){alert(`That's right ${userName}!, Stephen Clemmer loves coding because it allows him to work on interesting problems and meet interesting people!`);
    score++;
  } else {
    alert(`I'm sorry, ${userName}, but you're incorrect. Stephen Clemmer LOVES to code!`);
  }
  alert(`Your score is ${score} out of 1.`);
}


function secondQuestion(){
  let questionTwo = prompt('Answer "yes" or "no": Has Stephen worked with Grammy Award winning artists?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y'){
    alert(`That's right ${userName}! Stephen served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
    score++;
  } else {
    alert(`Sorry, ${userName} but Stephen has been very fortunate. He served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. Stephen also recorded Norah Jones' live set which was featured on her album The Fall.`);
  }
  alert(`Your score is ${score} out of 2.`);
}


function thirdQuestion(){
  let questionThree = prompt('Answer "yes" or "no": Is Stephen a pest control expert?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y'){
    alert(`That's right ${userName}! Stephen is an expert in insect and rodent pest control. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
    score++
  } else {
    alert(`Sorry, ${userName} but Stephen is an insect and rodent pest control expert. He used this knowledge to solve decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit. He's proud to have been able to affect so many lives by making that city a safer, greener place to live!`);
  }
  alert(`Your score is ${score} out of 3.`);
}


function fourthQuestion(){
  let questionFour = prompt('Answer "yes" or "no": Does Stephen love to cook and eat?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y'){
    alert(`That's right ${userName}! The only thing Stephen loves more than cooking food is eating it. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
    score++;
  } else {
    alert(`Sorry, ${userName} but the only thing Stephen loves more than cooking is eating. His favorite thing to make is lasagne because he can pack a ton of flavor into it. If you ask nicely, he'll give you the recipe!`);
  }
  alert(`Your score is ${score} out of 4.`);
}


function fifthQuestion(){
  let questionFive = prompt('Answer "yes" or "no": Does Stephen like playing soccer?').toLowerCase();

  if (questionFive === 'no' || questionFive === 'n'){
    alert(`That's right ${userName}! Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
    score++;
  } else {
    alert(`Sorry, ${userName} but Stephen does not enjoy playing soccer. He'd rather play guitar or piano, or go to a yoga class`);
  }
  alert(`Your score is ${score} out of 5.`);
}


function sixthQuestion(){
  let guessLimit = 4;
  let favNum = '12';
  let correctNumber = false;
  let questionSix;

  while(guessLimit > 0 && correctNumber === false){
    if (guessLimit === 4){
      questionSix = prompt(`${userName}, Can you guess Stephen's favorite number in four guesses or less?`);
    } else if (questionSix < 12){
      questionSix = prompt('Too low. What\'s you next guess?');
    } else if (questionSix > 12){
      questionSix = prompt('Too high. What\'s you next guess?');
    } else if (questionSix === '12'){
      alert('Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
      correctNumber = true;
      score++;
    }
    guessLimit--;
  }

  if(guessLimit === 0){
    alert('Nice try. Here\'s the answer. Stephen\'s favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
  }
  alert(`Your score is ${score} out of 6.`);
}


function seventhQuestion(){
  let favAnimal = ['tiger', 'dog', 'rat', 'meerkat'];


  for(let i = 0; i < 6; i++){
    let questionSeven = prompt(`${userName}, can you guess one of Stephen's favorite animals in six guesses or less?`).toLowerCase();

    for(let j = 0; j < favAnimal.length; j++){
      if(questionSeven === favAnimal[j]){
        alert('You got it! I love that animal!');
        score++;
        i = 6;
        break;
      }
    }
  } alert (`These were all of the possible guesses ${favAnimal}`);
  alert(`Your score is ${score} out of 7.`);
}
