import { askQuestion, randomInteger, createNewGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLauncher = createNewGame(() => {
  const gameNumber = randomInteger(1, 100);
  const calculateAnswer = gameNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = askQuestion(`Question: ${gameNumber}`);

  return [userAnswer, calculateAnswer];
}, gameDescription);

export default gameLauncher;
