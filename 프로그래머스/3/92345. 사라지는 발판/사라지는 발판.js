function solution(board, aloc, bloc) {
    const n = board.length; // 세로길이
    const m = board[0].length; // 가로길이
    
    const dy = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dx = [0, 0, -1, 1];
    
    const [_, answer] = dfs(...aloc, ...bloc);
    return answer;
    
    // dfs(현재위치, 상대위치)
    function dfs(cy, cx, oy, ox, count) {
        let canWin = false;
        let maxTurn = 0; // 질 수 밖에 없는 플레이어 오래 버티기
        let minTurn = Infinity; // 이길 수 있는 플레이어 최대한 빨리 승리하기
        
        // 현재 위치에 발판이 없을 경우
        if(board[cy][cx] === 0) {
            return [false, 0];
        }
        
        // 현재 방향에서 플레이어 이동
        for(let d = 0; d < 4; d++) {
            const ny = cy + dy[d];
            const nx = cx + dx[d];
            
            if(!canGo(ny, nx, n, m, board)) continue; // 현재 플레이어는 이겨야함 무조건 갈 수 있는 경로로
            
            board[cy][cx] = 0; // 이동 후 0으로 만들고
            const [opponentWin, turn] = dfs(oy, ox, ny, nx); // 상대 턴 만들기
            board[cy][cx] = 1; // 많은 경우를 탐색해야 하니까 1로 다시 바꿔두기
            
            if(!opponentWin) {
                // 상대가 질 경우 -> 현재 플레이어는 이김
                canWin = true;
                minTurn = Math.min(minTurn, turn + 1);
            } else {
                // 상대가 이길 경우 -> 현재 플레이어는 짐
                maxTurn = Math.max(maxTurn, turn + 1);
            }
        }
        
        if(canWin) return [true, minTurn];
        return [false, maxTurn];
    }
}

function canGo(y, x, n, m, board) {
    // 범위 내에 있는지 체크
    if(!(0 <= x && x < m && 0 <= y && y < n)) return false;
    
    // 발판이 있는지 체크
    if(board[y][x] === 0) return false;
    return true;
}