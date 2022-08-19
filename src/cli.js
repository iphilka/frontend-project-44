import readlineSync from "readline-sync";


let welcomeUser = () => {
    let name = readlineSync.question("May I have your name?");

    console.log(`Hello, ${name}!`);
};


export default welcomeUser;