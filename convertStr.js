// Convert a string to an array of characters

function convertStr(str) {
	let strArr = [];
	for (char of str) {
		strArr.push(char);
	}
	return strArr;
}

const str = "Hello World!";

console.log(convertStr(str)); // Output : ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"];
