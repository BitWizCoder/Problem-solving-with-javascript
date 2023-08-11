// Create a function that takes two parameters and returns the larger one.
function largeNum(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else {
        return num1
    }
}

console.log(largeNum(5, 10)) // Output : 10

console.log(largeNum(80, 15)) // Output : 80