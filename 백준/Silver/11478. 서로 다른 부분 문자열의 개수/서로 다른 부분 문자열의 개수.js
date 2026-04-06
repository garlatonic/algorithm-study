const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const S = input;
const set = new Set([...S]);

for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j <= S.length; j++) {
    set.add(S.slice(i, j));
  }
}

console.log(set.size);
