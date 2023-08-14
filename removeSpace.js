// Remove whitespace from the beginning and end of a string.

function removeSpace(str) {
	const formatedStr = str.trim();
	return formatedStr;
}

const str = " Hello World! ";
const str2 = "   Hello World!   ";

console.log(removeSpace(str)); // Output : 'Hello World!'
console.log(removeSpace(str2)); // Output : 'Hello World!'

// Bonus: Do this problem without using trim() method. instead, write a function that does the same thing manually.