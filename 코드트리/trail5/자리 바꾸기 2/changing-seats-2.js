const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const change = input.slice(1, 1 + k).map(line => line.split(' ').map(Number));

// Please Write your code here.
const position = Array.from({ length: n + 1 }, (_, i) => i);
const visited = Array.from({ length: n + 1 }, (_, i) => new Set([i]));

for (let i = 0; i < 3; i++) {
    for (const [a, b] of change) {
        const personA = position[a]; // a자리에 앉아있는 애
        const personB = position[b]; // b자리에 앉아있는 애

        visited[personA].add(b);
        visited[personB].add(a);

        [position[a], position[b]] = [position[b], position[a]];
    }
}

for (let i = 1; i <= n; i++) {
    console.log(visited[i].size);
}