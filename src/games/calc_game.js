import { askQuestion, randomInteger, createNewGame } from '../index.js';

const gameLauncher = createNewGame(() => {
  const firstNumber = randomInteger(1, 100);
  const secondNumber = randomInteger(1, 100);
  const operation = {
    '+': firstNumber + secondNumber,
    '*': firstNumber * secondNumber,
    '-': firstNumber - secondNumber,
  };
  const randomOperation = Object.keys(operation)[randomInteger(0, 2)];
  const calculateAnswer = operation[randomOperation];
  const userAnswer = askQuestion(`What is the result of the expression?\nQuestion: ${firstNumber} ${randomOperation} ${secondNumber}`);

  return [userAnswer, calculateAnswer];
});

export default gameLauncher;
