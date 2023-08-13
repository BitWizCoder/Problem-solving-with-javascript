// Check if a string contains a specific substring.

function checkStr(str1, str2) {
	if (str1.toLowerCase().includes(str2.toLowerCase())) {
		return true;
	}
}


const str1 = 'hello World'
const str2 = 'worL'


console.log(checkStr(str1, str2)); // Output : true