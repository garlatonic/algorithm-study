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
            // 1. 도시 i의 트럭은 한번 짐을 싣고 이동하는데 t[i] 시간이 소모됨
            // 2. 다시 돌아와서 실으려면 2 * t[i]
            // 3. mid 시간동안 왕복이 몇번 가능한지 확인
            let moveCount = 0;
            moveCount = Math.floor(mid / (2 * t[i]));
            // 4. 만약 시간이 남았다면 도시로 돌아오지 않아도 된다 (편도)
            if(mid % (2 * t[i]) >= t[i] ) moveCount += 1;
            
            // 5. 한 번 이동할 때 트럭이 실을 수 있는 최대 무게 w[i]
            // 6. 이동 횟수가 moveCount번이면 총 운반 가능한 무게는 w[i] * moveCount
            const cap = moveCount * w[i];
            // 7. 금은 최대 얼마나 실을 수 있는가
            gold += Math.min(g[i], cap);
            // 8. 은은 최대 얼마나 실을 수 있는가
            silver += Math.min(s[i], cap);
            // 9. 금과 은을 합쳐서 실제로 얼마나 옮길 수 있는가
            total += Math.min(g[i] + s[i], cap);
        }
        
        // 10. 금, 은, 총량이 모두 만족할 때 mid시간 안에 가능하다. 그러므로 최대시간을 mid보다 작은 시간으로 지정한다
        if(gold >= a && silver >= b && total >= a + b ) {
            high = mid - 1;
        } else { // 11. 불가능하다면 mid시간보다 더 큰 시간이 필요하다.
            low = mid + 1;
        }
    }
        
    return low;
}