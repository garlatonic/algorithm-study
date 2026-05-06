const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);

// Please Write your code here.
let minResult = Infinity;
const arr1 = [];
const arr2 = [];

chooseNumber(0);
console.log(minResult);

function chooseNumber(index) {
    if (index === 2 * n) {
        if(arr1.length === n && arr2.length === n) {
            const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
            const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

            minResult = Math.min(minResult, Math.abs(sum1 - sum2));
        }
        return;
    }

    if (arr1.length < n) {
        arr1.push(A[index]);
        chooseNumber(index + 1);
        arr1.pop();
    }
    if (arr2.length < n) {
        arr2.push(A[index]);
        chooseNumber(index + 1);
        arr2.pop();
    }
}