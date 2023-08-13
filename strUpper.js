// Convert a string to uppercase.

function strUppr(str) {
	let aplphabets = "";
	for (let st of str) {
		aplphabets += st.toUpperCase();
	}
	return aplphabets;
}

console.log(strUppr("Hello world!")); // Output : HELLO WORLD!
