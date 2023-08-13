// Use a conditional statement (if-else) to check if a number is even or odd.

function evenOdd(num) {
    if (num % 2 == 0) {
        return `The number ${num} is even.`;
    } else {
        return `The number ${num} is odd.`;
    }
}

console.log(evenOdd(40)); // Output : The number 40 is even.
console.log(evenOdd(85)); // Output : The number 85 is odd.
