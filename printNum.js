// Use a loop (for or while) to print numbers from 1 to 10.

function printNum() {
    let num = [];
    for (let i = 1; i <= 10; i++) {
        num.push(i);
    }
    return num;
}

console.log(printNum()); // Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
