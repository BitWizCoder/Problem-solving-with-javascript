// Remove the last element from an array.

function removeLastArr(arr) {
	arr.pop();
	return arr;
}

const arr = [2, 3, 4, 5];

console.log(removeLastArr(arr)); // Output : [ 2, 3, 4 ]

// Bonus: return only removed items instead of remaining elements.
