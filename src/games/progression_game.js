import { askQuestion, randomInteger, createNewGame } from '../index.js';

const getProgression = (firstNumber, step) => {
  const progressionLength = randomInteger(6, 15);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const gameLauncher = createNewGame(() => {
  const firstNumber = randomInteger(0, 50);
  const step = randomInteger(2, 8);
  const progression = getProgression(firstNumber, step);
  const randomIndex = randomInteger(0, progression.length - 1);
  const calculateAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const gameNumber = progression.join(' ');

  const userAnswer = askQuestion(`Question: ${gameNumber}`);

  return [userAnswer, calculateAnswer];
}, gameDescription);

export default gameLauncher;
