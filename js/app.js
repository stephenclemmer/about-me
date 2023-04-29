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
  let questionOne = prompt('Answer "yes" or "no": Do I love coding?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y'){alert(`That's right ${userName}!, I love coding because it is full of possibilities`);
    score++;
  } else {
    alert(`I'm sorry, ${userName}, but you're incorrect. Stephen Clemmer LOVES to code!`);
  }
  alert(`Your score is ${score} out of 1.`);
}


function secondQuestion(){
  let questionTwo = prompt('Answer "yes" or "no": Have I worked with Grammy Award winning artists?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y'){
    alert(`That's right ${userName}! I had a fun gig in mhy 20's. I served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. I also recorded Norah Jones' featured on a special release of her album, The Fall.`);
    score++;
  } else {
    alert(`Sorry, ${userName} but I had a cool gig in my 20's. I served as an engineer for the Rolling Stones' remastered recordings of their 1969 album Get Yer YaYa's Out, recorded live at Madison Square Garden. I also recorded Norah Jones' featured on a special release of her album, The Fall.`);
  }
  alert(`Your score is ${score} out of 2.`);
}


function thirdQuestion(){
  let questionThree = prompt('Answer "yes" or "no": Am I a pest control expert?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y'){
    alert(`That's right ${userName}! I followed my interest in biology and complex systems to become an expert in insect and rodent pest control. I solved decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit, making Chicago a safer and greener city.`);
    score++
  } else {
    alert(`Sorry, ${userName} but I followed my interest in biology and complex systems to become an expert in insect and rodent pest control. I solved decades-long pest infestations for the City of Chicago's public buildings, schools, airpots, and public transit, making Chicago a safer and greener city.`);
  }
  alert(`Your score is ${score} out of 3.`);
}


function fourthQuestion(){
  let questionFour = prompt('Answer "yes" or "no": Do I love to cook and eat?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y'){
    alert(`That's right, ${userName}! The only thing I love more than cooking food is eating it. My favorite thing to make is lasagne`);
    score++;
  } else {
    alert(`Sorry, ${userName} but the only thing I love more than cooking food is eating it. My favorite thing to make is lasagne`);
  }
  alert(`Your score is ${score} out of 4.`);
}


function fifthQuestion(){
  let questionFive = prompt('Answer "yes" or "no": Does Stephen like playing soccer?').toLowerCase();

  if (questionFive === 'no' || questionFive === 'n'){
    alert(`That's right ${userName}! I do not enjoy playing soccer. I'd rather play guitar or piano, or go to a yoga class`);
    score++;
  } else {
    alert(`Sorry, ${userName} but I do not enjoy playing soccer. I'd rather play guitar or piano, or go to a yoga class`);
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
      questionSix = prompt(`${userName}, Can you guess my favorite number in four guesses or less?`);
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
    alert('Nice try. Here\'s the answer. My favorite number is twelve because it is so musical. Twelve can be subdivided as 1, 2, 3, 4, 6, and 12! TONS OF FUN!');
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
