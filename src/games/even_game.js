import { askQuestion, randomInteger, createNewGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameLauncher = createNewGame(() => {
  const gameNumber = randomInteger(1, 100);
  const calculateAnswer = isEven(gameNumber) ? 'yes' : 'no';
  const userAnswer = askQuestion(`Question: ${gameNumber}`);

  return [userAnswer, calculateAnswer];
}, gameDescription);

export default gameLauncher;
