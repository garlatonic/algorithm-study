const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const clothes = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(-Infinity));
for (let n = 0; n <= N; n++) {
    dp[0][n] = 0;
}

for (let d = 1; d <= M; d++) {
    for (let n = 1; n <= N; n++) {
        const [s1, e1, v1] = clothes[n - 1];

        // 오늘 n번째 옷을 입을 수 있다면
        if (s1 <= d && d <= e1) {
            for (let m = 1; m <= N; m++) {
                const [s2, e2, v2] = clothes[m - 1];

                // d가 1이라면
                if (d === 1) {
                    dp[1][n] = 0;
                }

                // d일에 c1번 옷을 입는다면?
                // -> 전날에 입은 옷을 m라고 한다면?
                // -> 그럼 m을 입을 수 있는 날짜가 d - 1 범위가 된다면?
                if (s2 <= d - 1 && d - 1 <= e2) {
                    dp[d][n] = Math.max(dp[d][n], dp[d - 1][m] + Math.abs(v1 - v2));
                }
            }
        }
    }
}

console.log(Math.max(...dp[M]));