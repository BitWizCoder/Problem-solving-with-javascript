// Convert a string to lowercase.

function strLower(str) {
	let aplphabets = "";
	for (let st of str) {
		aplphabets += st.toLowerCase();
	}
	return aplphabets;
}

console.log(strLower("HeLlo woRld!")); // Output : hello world!
