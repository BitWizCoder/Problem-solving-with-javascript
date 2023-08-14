// Replace a specific word in a string with another word.

function replaceWord(originalStr, wordToReplace, replacementWord) {
	let modifiedString = originalStr.replace(
		new RegExp(wordToReplace, "g"),
		replacementWord,
	);
	return modifiedString;
}

const originalStr =
	"Hello Earth! Javascript is awesome. Hello Earth! is our first programm.";
const wordToReplace = "Earth";
const replacementWord = "World";

console.log(replaceWord(originalStr, wordToReplace, replacementWord));
// Output : Hello World! Javascript is awesome. Hello World! is our first programm.
