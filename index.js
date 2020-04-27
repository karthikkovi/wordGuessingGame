const Word = require("./word");
const inquirer = require("inquirer");
const words = ["Birds of Prey", "Sonic the Hedgehog", "Bad Boys for Life", "Dolittle", "The Invisible Man"];
const randomWord = words[Math.floor(Math.random()*words.length)];
const word = new Word(randomWord);

function init() {
    inquirer.prompt([{
        type: "input",
        name: "guessedLetter",
        message: "Guess a letter in this 2020 movie name"
        }
    ]).then((userInput) => {
        word.displayWord(userInput.guessedLetter);
    })
}

init();