const Letter = require("./letter")

class Word {

    constructor(word) {
        this.wordArr = word.split("");
        this.outputString = "";
    }

    displayWord(userInput) {
        this.wordArr.forEach(letter => {
            let letterClass = new Letter(userInput, letter);
            this.outputString += " " + letterClass.showCharacter();
        })

        return this.outputString;
    }
}


// const obj = new Word("abc");
// console.log(obj.displayWord("a"));

module.exports = Word;