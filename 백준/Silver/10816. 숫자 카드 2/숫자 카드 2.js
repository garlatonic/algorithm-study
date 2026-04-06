const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const cardsNum = input[1].split(" ").map(Number);
const M = +input[2];
const questions = input[3].split(" ").map(Number);

const cardsMap = new Map();
for (let i = 0; i < N; i++) {
  const cardNum = cardsNum[i];
  cardsMap.set(cardNum, (cardsMap.get(cardNum) || 0) + 1);
}

let result = "";
for (let i = 0; i < M; i++) {
  const q = questions[i];

  result += (cardsMap.get(q) || 0) + " ";
}
console.log(result.trim());
