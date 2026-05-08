function solution(n, computers) {
  const visited = new Array(n).fill(false);
  const nextworks = [];

  let i = 0;
  while (i !== -1) {
    const network = new Set();
    network.add(i);
    visited[i] = true; // i번째 노드는 방문했으므로 true로 변경
    dfs(i, network, visited);
    nextworks.push(network);
    i = visited.findIndex((v) => v === false);
  }

  function dfs(cur, network, visited) {
    for(let j = 0; j < n; j++) {
      if(computers[cur][j] === 1 && !visited[j]) {
        visited[j] = true;
        network.add(j);
        dfs(j, network, visited);
      }
    }
  }

  return nextworks.length;
}