import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  console.log(`Your answer: ${answer}`);
  return answer;
};

export default welcomeUser;
