// Add given elements to the end of an array.

function arrAdd(arr, ...elements) {
	// const arr = [];
	for (element of elements) {
		arr.push(element);
	}

	return arr;
}

const arr = ["Hello", "World!"];

console.log(arrAdd(arr, 3, 4, 2, 5, 2));

// Bonus: Add an element to the end of an array. one item insted of adding multiple items at once.
