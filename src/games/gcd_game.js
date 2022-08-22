import { askQuestion, randomInteger, createNewGame } from '../index.js';

const getGcd = (number1, number2) => {
  if (number2 > number1) return getGcd(number2, number1);
  if (!number2) return number1;
  return getGcd(number2, number1 % number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameLauncher = createNewGame(() => {
  const firstNumber = randomInteger(1, 100);
  const secondNumber = randomInteger(1, 100);
  const calculateAnswer = getGcd(firstNumber, secondNumber);
  const userAnswer = askQuestion(`Question: ${firstNumber} ${secondNumber}`);

  return [userAnswer, calculateAnswer];
}, gameDescription);

export default gameLauncher;
