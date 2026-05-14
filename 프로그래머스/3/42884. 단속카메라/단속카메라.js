function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let count = 1;
    let cam = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {
        const [s, e] = routes[i];
        
        if(cam < s) {
            count += 1;
            cam = e;
        }
    }
    
    return count;
}