const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const board = input.slice(1).map((line) => line.trim().split(""));

let minCount = Infinity;
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    // 시작위치 정하기
    const color = [];
    // 첫번째 칸이 흑색으로 칠해질 경우
    let countBlack = 0;
    color.push(["B", "W"], ["W", "B"]);
    for (let r = i; r < i + 8; r++) {
      for (let c = j; c < j + 8; c++) {
        const y = (r - i) % 2;
        const x = (c - j) % 2;

        if (board[r][c] !== color[y][x]) countBlack++;
      }
    }

    // 첫번째 칸이 백색으로 칠해질 경우
    let countWhite = 0;
    color.length = 0;
    color.push(["W", "B"], ["B", "W"]);
    for (let r = i; r < i + 8; r++) {
      for (let c = j; c < j + 8; c++) {
        const y = (r - i) % 2;
        const x = (c - j) % 2;

        if (board[r][c] !== color[y][x]) countWhite++;
      }
    }

    minCount = Math.min(minCount, countBlack, countWhite);
  }
}

console.log(minCount);
