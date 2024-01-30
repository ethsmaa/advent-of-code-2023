import data from './data.js';
const findCalibrationValue = (line) => {
    let firstDigit = 0;
    let lastDigit = 0;

    // Find the first digit
    for (let i = 0; i < line.length; i++) {
        if (!isNaN(parseInt(line[i]))) {
            firstDigit = parseInt(line[i]);
            break;
        }
    }

    // Find the last digit
    for (let i = line.length - 1; i >= 0; i--) {
        if (!isNaN(parseInt(line[i]))) {
            lastDigit = parseInt(line[i]);
            break;
        }
    }

    return firstDigit * 10 + lastDigit;
}
const lines = data.trim().split('\n');

const sum = lines.reduce((acc,line) => acc + findCalibrationValue(line), 0)
console.log("The sum of all calibration values is:", sum);