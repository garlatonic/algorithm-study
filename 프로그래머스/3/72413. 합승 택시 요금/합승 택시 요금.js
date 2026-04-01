function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to, cost] of fares) {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  }

  const distS = dijkstra(s, graph);
  const distA = dijkstra(a, graph);
  const distB = dijkstra(b, graph);

  let answer = Infinity;

  for (let k = 1; k <= n; k++)
    answer = Math.min(answer, distS[k] + distA[k] + distB[k]);

  return answer;
}

function dijkstra(start, graph) {
  const dist = Array(graph.length + 1).fill(Infinity);
  const visited = Array(graph.length + 1).fill(false);
  dist[start] = 0;

  for (let i = 0; i <= graph.length; i++) {
    let minDist = Infinity;
    let minIndex = -1;

    for (let j = 1; j <= graph.length; j++) {
      if (visited[j]) continue;
      if (dist[j] < minDist) {
        minDist = dist[j];
        minIndex = j;
      }
    }

    if (minIndex === -1) break;
    visited[minIndex] = true;

    for (const [next, cost] of graph[minIndex]) {
      if (dist[next] > dist[minIndex] + cost) {
        dist[next] = dist[minIndex] + cost;
      }
    }
  }
  return dist;
}
