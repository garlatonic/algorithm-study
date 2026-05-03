const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);

// Please Write your code here.
const answer = [];
function dfs(arr) {
    if (arr.length === n) {
        answer.push(arr);
        return;
    }

    for (let i = 1; i <= k; i++) {
        // 연속하여 같은 숫자가 3번 이상 나오는 경우 제외
        if (
            arr.length >= 2 &&
            arr[arr.length - 1] === i &&
            arr[arr.length - 2] === i
        ) {
            continue;
        }
        dfs([...arr, i]);
    }
}

dfs([]);
answer.forEach((arr) => console.log(arr.join(" ")));
