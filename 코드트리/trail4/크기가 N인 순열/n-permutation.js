const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const visited = Array(n).fill(false);
const result = [];
const arr = [];

function chooseNumber() {
    if(arr.length === n) {
        result.push(arr.join(" ").toString());
        return;
    }

    for(let i = 1; i <= n; i++) {
        if(visited[i]) continue;

        visited[i] = true;
        arr.push(i);

        chooseNumber();

        arr.pop();
        visited[i] = false;
    }
}

chooseNumber(1);
result.sort((a, b) => a.localeCompare(b));
result.forEach((v) => console.log(v));