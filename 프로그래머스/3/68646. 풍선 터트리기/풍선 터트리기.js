function solution(a) {
    const n = a.length;
    let answer = 0;
    
    const lMin = Array(n).fill(Infinity);
    const rMin = Array(n).fill(Infinity);
    lMin[0] = a[0];
    rMin[n - 1] = a[n - 1];
    
    for(let i = 1; i < n; i++) {
        lMin[i] = Math.min(lMin[i - 1], a[i]);
    }
    for(let i = n - 2; i >= 0; i--) {
        rMin[i] = Math.min(rMin[i + 1], a[i]);
    }
    
    for(let i = 0; i < n; i++) {
        const cur = a[i];
        
        // 현재 위치 기준 왼쪽 최소
        const l = i === 0 ? Infinity : lMin[i - 1] ;
        // 현재 위치 기준 오른쪽 최소
        const r = i === n - 1 ? Infinity : rMin[i + 1];
        
        if(cur < l || cur < r) answer += 1;
    }
    
    return answer;
}