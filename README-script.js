const fs = require('fs');

const inputFilePath = 'README-template.md';
const outputFilePath = 'README.md';
let counter = 1;

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const newData = data.replace(/xi\./g, () => {
        return `${counter++}.`;
    });

    fs.writeFile(outputFilePath, newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
            return;
        }
        console.log('Replacement complete. Result saved in', outputFilePath);
    });
});
