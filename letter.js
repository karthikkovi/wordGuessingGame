class Letter {
    constructor(userGuess, wordLetter) {
        this.userGuess = userGuess;
        this.wordLetter = wordLetter;
    }

    showCharacter() {

        if (this.userGuess === this.wordLetter) {
            return this.userGuess;
        } else {
            return "_"
        }
    }
}

module.exports = Letter;