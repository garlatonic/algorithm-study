const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input.map(Number);
const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
arr.sort((a, b) => a - b);
const midIndex = Math.floor(arr.length / 2);
const midNumber = arr[midIndex];

console.log(average);
console.log(midNumber);
