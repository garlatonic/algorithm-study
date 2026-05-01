const fs = require("fs");
const { get } = require("http");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, c] = input[0].split(" ").map(Number);
const weights = input
    .slice(1, 1 + n)
    .map((line) => line.split(" ").map(Number));

// Please Write your code here.
let maxPrice = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - m + 1; j++) {
        const priceA = getMaxPrice(weights[i].slice(j, j + m));
        for (let k = 0; k < n; k++) {
            for (let l = 0; l < n - m + 1; l++) {
                if (i === k && j <= l && l < j + m) continue; // 2번 도둑이 1번 도둑과 겹치는 경우
                if (i === k && l <= j && j < l + m) continue; // 1번 도둑이 2번 도둑과 겹치는 경우

                const priceB = getMaxPrice(weights[k].slice(l, l + m));
                maxPrice = Math.max(maxPrice, priceA + priceB);
            }
        }
    }
}

console.log(maxPrice);

// 적절하게 골라서 가격이 제일 커야함
function bfs(index, visited, thief) {
    const len = thief.length;

    if (index === len) {
        let weight = 0;
        let price = 0;
        for (let i = 0; i < len; i++) {
            if (!visited[i]) continue;
            weight += thief[i];
            price += thief[i] ** 2;
        }
        if (weight > c) return 0;
        return price;
    }

    visited[index] = false;
    const priceWithout = bfs(index + 1, visited, thief);
    visited[index] = true;
    const priceWith = bfs(index + 1, visited, thief);
    return Math.max(priceWithout, priceWith);
}

function getMaxPrice(thief) {
    let totalWeights = thief.reduce((a, b) => a + b, 0);
    if (totalWeights <= c) {
        return thief.reduce((a, b) => a + b ** 2, 0);
    } else {
        const visited = new Array(thief.length).fill(false);
        return bfs(0, visited, thief);
    }
}
