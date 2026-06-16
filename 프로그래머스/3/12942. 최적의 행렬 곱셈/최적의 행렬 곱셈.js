function solution(matrix_sizes) {
  const n = matrix_sizes.length;

  // dp[i][j] = i번째 행렬부터 j번째 행렬까지 곱하는데 필요한 최소 곱셈 횟수
  const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }

  // 구간을 어디서 나눌지 결정
  for (let length = 2; length <= n; length++) {
    // i부터 j까지의 구간
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;

      // k는 구간을 나누는 지점
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] +
            dp[k + 1][j] +
            matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1],
        );
      }
    }
  }

  return dp[0][n - 1];
}