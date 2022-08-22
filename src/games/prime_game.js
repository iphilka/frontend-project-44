import { askQuestion, randomInteger, createNewGame } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number < 2) return false;
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLauncher = createNewGame(() => {
  const randomNumber = randomInteger(1, 100);
  const calculateAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const userAnswer = askQuestion(`Question: ${randomNumber}`);

  return [userAnswer, calculateAnswer];
}, gameDescription);

export default gameLauncher;
