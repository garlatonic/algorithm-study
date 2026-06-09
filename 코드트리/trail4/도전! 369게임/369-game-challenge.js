const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input[0].trim();

// Please Write your code here.
const MOD = 10 ** 9 + 7;

const digits = N.split("").map(Number);
const allowed = [0, 1, 2, 4, 5, 7, 8];

// dp[pos][mod][tight][started]: pos번째 자리에서 현재 나머지가 mod이고, 시작된 상태
const dp = Array.from({ length: digits.length }, () =>
  Array.from({ length: 3 }, () => Array(2).fill(-1)),
);

let count = dfs(0, 0, true, false);

// pos: 현재 몇번째 자리인지
// mod: 지금까지 만든 수에서 %3
// tight: 아직 N과 앞자리가 같은지
// started: 숫자를 시작했는지
function dfs(pos, mod, tight, started) {
  if (pos === digits.length) {
    return started && mod !== 0 ? 1 : 0; // 숫자가 시작됐고 3의 배수가 아니면 1, 아니면 0
  }

  // 전에 계산한 적 있으면 dp에서 가져오기 (tight이 true인 경우는 N과 같은 숫자만 고려하기 때문에 저장할 필요 없음)
  const s = started ? 1 : 0;
  if (!tight && dp[pos][mod][s] !== -1) return dp[pos][mod][s];

  const limit = tight ? digits[pos] : 9; // 앞자리 수가 같다면 자리수 확인 필요하고 아니라면 자리수 싹 봐도 괜찮음
  let ret = 0;

  for (const d of allowed) {
    if (limit < d) continue;

    const newTight = tight && d === limit;
    const newStarted = started || d !== 0;

    let newMod = mod;
    if (newStarted) newMod = (mod * 10 + d) % 3;

    ret = (ret + dfs(pos + 1, newMod, newTight, newStarted)) % MOD;
  }

  // 계산 끝나면 dp에 저장
  if (!tight) dp[pos][mod][s] = ret;
  return ret;
}

function stringMod(str) {
  let result = 0;
  for (const ch of str) {
    result = (result * 10 + Number(ch)) % MOD;
  }
  return result;
}

const nMod = stringMod(N, MOD);
const answer = (nMod - count + MOD) % MOD;
console.log(answer);
