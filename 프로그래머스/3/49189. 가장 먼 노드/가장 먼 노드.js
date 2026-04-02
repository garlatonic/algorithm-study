function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const dist = Array(n + 1).fill(-1);
  const q = [1];
  let idx = 0;
  dist[1] = 0;

  while (idx < q.length) {
    const cur = q[idx++];

    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        q.push(next);
      }
    }
  }

  const maxDistance = Math.max(...dist.slice(1));
  return dist.slice(1).filter((d) => d === maxDistance).length;
}