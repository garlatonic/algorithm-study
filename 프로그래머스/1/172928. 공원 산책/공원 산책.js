function solution(park, routes) {
    const n = park.length;
    const m = park[0].length;
    
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const dir = { N: 0, S: 1, W: 2, E: 3 };
    
    let cy, cx;
    let isFound = false;
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < m; x++) {
            if(park[y][x] === "S") {
                [cy, cx] = [y, x];
                isFound = true;
                
                break;
            }
        }
        
        if(isFound) break;
    }
    
    for(const route of routes) {
        const [O, N] = route.split(" ");
        
        let [ny, nx] = [cy, cx];
        let isBlocked = false;
        for(let i = 0; i < N; i++) {
            ny += dy[dir[O]];
            nx += dx[dir[O]];
            
            if(!inRange(ny, nx) || park[ny][nx] === "X") {
                isBlocked = true;
                break;
            }
        }
        
        if(!isBlocked) [cy, cx] = [ny, nx];
    }
    
    return [cy, cx];
    
    function inRange(y, x) {
        return 0 <= y && y < n && 0 <= x && x < m;
    }
}