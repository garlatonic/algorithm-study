function solution(game_board, table) {
    const n = table.length; // table과 game_board의 크기는 동일
    
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    
    // table에서 조각을 찾아 배열로 저장
    const pieces = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(table[i][j] === 0) continue;
            const piece = [];
            const queue = [[i, j]];
            table[i][j] = 0;
            while(queue.length) {
                const [y, x] = queue.pop();
                piece.push([y, x]);
                for(let d = 0; d < 4; d++) {
                    const ny = y + dy[d];
                    const nx = x + dx[d];
                    if(inRange(ny, nx, n) && table[ny][nx] === 1) {
                        table[ny][nx] = 0;
                        queue.push([ny, nx]);
                    }
                }
            }
            pieces.push(piece);
        }
    }
    
    // game_board에서 빈 공간을 찾아 배열로 저장
    const blanks = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(game_board[i][j] === 1) continue;
            const blank = [];
            const queue = [[i, j]];
            game_board[i][j] = 1;
            while(queue.length) {
                const [y, x] = queue.pop();
                blank.push([y, x]);
                for(let d = 0; d < 4; d++) {
                    const ny = y + dy[d];
                    const nx = x + dx[d];
                    if(inRange(ny, nx, n) && game_board[ny][nx] === 0) {
                        game_board[ny][nx] = 1;
                        queue.push([ny, nx]);
                    }
                }
            }
            blanks.push(blank);
        }
    }
    
    // 조각과 빈 공간을 비교하여 맞는 조각이 있다면 점수에 더하기
    let score = 0;
    const matchBlank = Array(blanks.length).fill(false);
    const matchPiece = Array(pieces.length).fill(false);
    
    for(let i = 0; i < blanks.length; i++) {
        const blank = [...blanks[i]];
        for(let j = 0; j < pieces.length; j++) {
            // 이미 매칭된 빈공간이나 조각이 있을 경우 스킵
            if(matchBlank[i]) continue;
            if(matchPiece[j]) continue;
            
            const piece = [...pieces[j]];
            
            // 조각을 회전하면서 빈 공간과 비교
            let currentPiece = piece;
            for(let k = 0; k < 4; k++) {
                if(isSameShape(blank, currentPiece)) {
                    score += blank.length;
                    matchBlank[i] = true;
                    matchPiece[j] = true;
                    break;
                }
                currentPiece = rotatePiece(currentPiece);
            }
        }
    }
    
    return score;
}

function rotatePiece(piece) {
    return piece.map(([y, x]) => [x, -y]);
}

function isSameShape(blank, piece) {
    // 조각과 빈 공간의 길이가 다르면 모양 자체가 다름
    if(blank.length !== piece.length) return false;
    
    // 조각과 빈 공간의 좌표를 정렬
    blank.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    piece.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    // 원점 기준으로 정규화
    const relatedBlank = blank.map(([y, x]) => [y - blank[0][0], x - blank[0][1]]);
    const relatedPiece = piece.map(([y, x]) => [y - piece[0][0], x - piece[0][1]]);
    
    for(let i = 0; i < blank.length; i++) {
        // x, y좌표 비교해서 다를 경우 거짓 반환
        if(relatedBlank[i][0] !== relatedPiece[i][0] || relatedBlank[i][1] !== relatedPiece[i][1]) return false;
    }
    
    return true;
}
    
function inRange(y, x, n) {
    return 0 <= y && y < n && 0 <= x && x < n;
}