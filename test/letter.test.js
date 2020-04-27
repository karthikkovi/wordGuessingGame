const Letter = require("../letter");

describe("Letter", () => {
    describe("Initializaion", () => {
        it("it should create a letter object with guessed letter and user input", () => {
            // Arrange
            const letter = "a";

            // Act
            const obj = new Letter("a", "a");

            // Assert
            expect(obj.userGuess).toEqual(letter);

        });

        it("it should compare the userInput and wordLetter and return the letter if they are the same", ()=>{
            // Arrange
            const letter = "a";

            // Act
            const obj = new Letter("a","a");

            // Assert
            expect(obj.showCharacter()).toEqual(letter);
            
        });

        it("it should compare the userInput and wordLetter and return _ if they are not equal", ()=>{
            // Arrange
            const letter = "_";

            // Act
            const obj = new Letter("a", "b");

            // Assert
            expect(obj.showCharacter()).toEqual(letter);
        })
    })
})