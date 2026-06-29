const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const numMap = new Map();
let answer = 0;

for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
        const need = k - arr[i] - arr[j];

        if(numMap.has(need)) answer += numMap.get(need);
    }

    numMap.set(arr[i], (numMap.get(arr[i]) ?? 0) + 1);
}

console.log(answer);