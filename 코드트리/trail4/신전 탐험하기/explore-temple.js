const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const floors = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

// dp[f][d] = 현재 f층에서 d(l, m, r)방을 들어갈 때 가져갈 수 있는 총 보물의 개수
const dp = Array.from({ length: n + 1 }, () => Array(3).fill(-Infinity));
for (let d = 0; d < 3; d++) {
    dp[1][d] = floors[0][d];
}

for (let f = 2; f <= n; f++) {
    for (let d = 0; d < 3; d++) {
        for (let r = 0; r < 3; r++) {
            // 전층에선 r방을 들어가고, 이번 층(f)에서 d방을 들어가려고 할 때
            if (r === d) continue; // 같은 방으로 들어가면 안됨

            dp[f][d] = Math.max(dp[f][d], dp[f - 1][r] + floors[f - 1][d]);
        }

    }
}

let answer = 0;
for (let d = 0; d < 3; d++) {
    answer = Math.max(dp[n][d], answer)
}
console.log(answer)