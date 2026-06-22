function solution(n) {
    const arr = [];
    let count = 0;
    
    dfs(0, 0);
    
    function dfs(left, right) {
        if(left === n && right === n) {
            count += 1;
            return;
        }
        
        if(left < n) {
            arr.push(`(`);
            dfs(left + 1, right);
            arr.pop();
        }
        
        if(left > right) {
            arr.push(`)`);
            dfs(left, right + 1);
            arr.pop();
        }
    }
    
    return count;
}