class Letter {
    constructor(userGuess, wordLetter) {
        this.userGuess = userGuess;
        this.wordLetter = wordLetter;
    }

    showCharacter() {
        (this.userGuess === this.wordLetter) ? [this.userGuess, true] : ["_", false]
    }
}

module.exports = Letter;