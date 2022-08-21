import { askQuestion, welcomeUser } from '../cli.js';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const runGameLoop = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;

  while (score < 3){
    let gameNumber = randomInteger(1,100)
    let userAnswer = askQuestion(`Question: ${gameNumber} `);
    let calculateAnswer = gameNumber % 2 == 0 ? 'yes' : 'no';

    // обработка ошибок ввода
    if (userAnswer != 'yes' && userAnswer != 'no') {
      console.log('Uncorrect answer, use "yes" or "not"!');
    }
    else {
      if (userAnswer == calculateAnswer) {
        console.log('Correct!');
        score++;
      }
      else {
        console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was ${calculateAnswer}`);
        console.log(`Let's try again, Bill!`);
        score = 0;
      }    
    }
  }

  return true;
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = welcomeUser();
  if (runGameLoop()) {
    console.log(`Congratulations, ${userName}!`);
  }  
}

export default startGame;
