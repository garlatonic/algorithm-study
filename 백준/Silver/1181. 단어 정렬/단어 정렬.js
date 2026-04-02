const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const words = input.slice(1).map((line) => line.trim());

words.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a.localeCompare(b);
});

const uniqueWords = [...new Set(words)];
uniqueWords.forEach((word) => console.log(word));
