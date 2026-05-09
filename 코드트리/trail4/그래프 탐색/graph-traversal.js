const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(" ").map(Number));
}

// Please Write your code here.
// 인접 리스트
const graph = Array.from({ length: n + 1 }, () => []);
edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

// 방문 배열
const visited = Array(n + 1).fill(false);

let count = 0;
dfs(1);
console.log(count > 0 ? count - 1 : count);

function dfs(node) {
    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            count++;
            dfs(neighbor);
        }
    }
}
