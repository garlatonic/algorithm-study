const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m, k] = input[0].split(" ").map(Number);

// Please Write your code here.

// dp[i][sum][min]
// i번째부터 n번째까지 채울 때
// 남은 합이 sum이고
// 최소 숫자가 min이상일 때
// 가능한 수열의 갯수?..
const dp = Array.from({ length: n + 2 }, () =>
    Array.from({ length: m + 1 }, () => Array(m + 1).fill(-1)),
);

dfs(1, m, 1);

const answer = [];
let sum = m;
let min = 1;
for (let i = 1; i <= n; i++) {
    for (let x = min; x <= sum; x++) {
        const count = dfs(i + 1, sum - x, x); // i번째에 x를 선택했을 때 가능한 수열의 갯수
        if (count >= k) {
            answer.push(x);
            sum -= x;
            min = x;
            break;
        } else {
            k -= count; // i번째에 x를 선택했을 때 가능한 수열의 갯수가 k보다 작으면, k에서 그 갯수만큼 빼고 다음 x로 넘어감
        }
    }
}
console.log(answer.join(" "));

function dfs(i, sum, min) {
    if (sum < 0) return 0;

    if (i === n + 1) {
        return sum === 0 ? 1 : 0;
    }

    if (dp[i][sum][min] !== -1) {
        return dp[i][sum][min];
    }

    let total = 0;

    for (let x = min; x <= sum; x++) {
        total += dfs(i + 1, sum - x, x);
    }

    dp[i][sum][min] = total;
    return total;
}
