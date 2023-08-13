// Replace a specific word in a string with another word.

function replaceWord(word1, word2) {
	if (word1.toLowerCase().includes("world".toLowerCase())) {
		word1.replace('test')
	} else {
		return false;
	}
}

const word1 = "Hello World!";
const word2 = "Earth";
console.log(replaceWord(word1, word2));
