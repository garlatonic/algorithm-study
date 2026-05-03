function solution(n, s) {
    const answer = Array(n).fill(Math.floor(s / n));
    
    if(n > s) return [-1];
    
    let remain = s % n;
    let i = 0;
    while(remain > 0) {
        remain -= 1;
        answer[i] = answer[i] + 1;
        i++;
    }
    
    answer.sort();
    
    return answer;
}