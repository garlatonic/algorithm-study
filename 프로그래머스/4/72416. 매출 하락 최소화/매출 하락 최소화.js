function solution(sales, links) {
  const teams = Array.from({ length: sales.length + 1 }, () => []); // 0인덱스는 원래 빈 값으로 두기

  // 트리 생성
  for (const link of links) {
    const [leader, member] = link;
    teams[leader].push(member);
  }

  function dfs(number) {
    if (teams[number].length > 0) {
      let absentSum = 0;
      let attendSum = sales[number - 1];
      let minDiff = Infinity;
      let hasAttendee = false;

      for (let i = 0; i < teams[number].length; i++) {
        const dp = dfs(teams[number][i]);
        absentSum += Math.min(dp[0], dp[1]);
        attendSum += Math.min(dp[0], dp[1]);
        minDiff = Math.min(dp[1] - dp[0], minDiff);

        if (dp[1] < dp[0]) {
          hasAttendee = true;
        }
      }

      if (!hasAttendee) absentSum += minDiff;

      return [absentSum, attendSum];
    } else {
      return [0, sales[number - 1]];
    }
  }

  const result = dfs(1);
  return Math.min(...result);
}