function solution(a, b, g, s, w, t) {
    const n = g.length; // 도시 수
    
    let low = 0; // 최고의 상황
    let high = Number.MAX_SAFE_INTEGER; // 최악의 상황
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        let gold = 0;
        let silver = 0;
        let total = 0;
        
        // mid 시간동안 도시 i에 속한 트럭 이동 횟수
        for(let i = 0; i < n; i++) {
            let moveCount = 0;
            moveCount = Math.floor(mid / (2 * t[i]));
            if(mid % (2 * t[i]) >= t[i] ) moveCount += 1;
            
            // i에서 실을 수 있는 총 무게
            const cap = moveCount * w[i];
            gold += Math.min(g[i], cap);
            silver += Math.min(s[i], cap);
            total += Math.min(g[i] + s[i], cap);
        }
        
        if(gold >= a && silver >= b && total >= a + b ) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
        
    return low;
}