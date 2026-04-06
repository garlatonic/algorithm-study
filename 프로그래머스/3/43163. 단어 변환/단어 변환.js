function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = Array(words.length).fill(false);
  const queue = [[begin, 0]];

  while (queue.length) {
    const [word, count] = queue.shift();

    if (word === target) return count;

    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;

      const compare = words[i];
      let diff = 0;
      for (let j = 0; j < compare.length; j++) {
        if (word[j] !== compare[j]) diff++;
        if (diff > 1) break; // 넘어가면 다른 단어 확인
      }
      if (diff === 1) {
        visited[i] = true;
        queue.push([compare, count + 1]);
      }
    }
  }

  return 0;
}