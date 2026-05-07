const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const visited = Array(n + 1).fill(false);
const arr = [];

function chooseNum(cnt) {
    if (cnt === n) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = n; i >= 1; i--) {
        if (visited[i]) continue;

        visited[i] = true;
        arr.push(i);

        chooseNum(cnt + 1);

        arr.pop();
        visited[i] = false;
    }
}

chooseNum(0);