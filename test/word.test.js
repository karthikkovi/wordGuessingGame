const Word = require("../word");

describe("Word", () => {
    describe("Initialization", ()=>{
        it("should take a letter input and compare it a letter inside a word and print the string on the console.", ()=> {
            // Arrange
            const letter = "a";
            const word = "abcabc";
            const expectedString = " a _ _ a _ _"

            // Act
            const obj = new Word(word);

            // Assert
            expect(obj.displayWord(letter)).toEqual(expectedString);

        })
    })
})