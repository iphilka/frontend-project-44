import { askQuestion, randomInteger, createNewGame } from '../index.js';

const gameLauncher = createNewGame(() => {
  const gameNumber = randomInteger(1, 100);
  const calculateAnswer = gameNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = askQuestion(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${gameNumber}`);

  return [userAnswer, calculateAnswer];
});

export default gameLauncher;
