const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.

const sequence = Array(n).fill(-1);
let compare = "";

function dfs(index) {
    // 이미 비교할 수열이 존재하는 경우, 더 이상 탐색하지 않음
    if (compare !== "") return;

    if (index === n) {
        compare = sequence.slice().join("");
        return;
    }

    for (let digit = 4; digit <= 6; digit++) {
        sequence[index] = digit;

        if (!hasRepeatString(index)) dfs(index + 1);
    }
}

dfs(0);
console.log(compare);

function hasRepeatString(index) {
    for (let half = 1; 2 * half <= index + 1; half++) {
        let isRepeat = true;
        for (let i = 0; i < half; i++) {
            if (sequence[index - i] !== sequence[index - half - i]) {
                isRepeat = false;
                break;
            }
        }
        if (isRepeat) return true;
    }
    return false;
}
