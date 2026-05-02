const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const expression = input[0];

// Please Write your code here.
const alph = Array(6).fill(0);
const alphMap = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

// 사용한 알파벳 세기
const usedAlph = Array(6).fill(false);
expression.split("").forEach((e) => {
  if (alphMap.hasOwnProperty(e)) {
    usedAlph[alphMap[e]] = true;
  }
});

let maxSum = -Infinity;
function dfs(index) {
  if (index === 6) {
    const result = calculate(alph);
    maxSum = Math.max(result, maxSum);
    return;
  }

  if (!usedAlph[index]) {
    dfs(index + 1);
    return;
  }

  for (let i = 1; i <= 4; i++) {
    alph[index] = i;
    dfs(index + 1);
  }
}

dfs(0);
console.log(maxSum);

function calculate(alph) {
  let currOp = null;
  let currAn = 0;

  for (const e of expression) {
    if (alphMap.hasOwnProperty(e)) {
      if (!currOp) {
        currAn = alph[alphMap[e]];
      } else {
        const result = operation(currAn, alph[alphMap[e]], currOp);
        currAn = result;
        currOp = null;
      }
    } else {
      currOp = e;
    }
  }

  return currAn;
}

function operation(a, b, op) {
  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else return a * b;
}
