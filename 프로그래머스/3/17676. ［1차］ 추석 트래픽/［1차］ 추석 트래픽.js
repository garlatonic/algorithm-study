function solution(lines) {
    const logs = []; // [s, e]
    
    for(const line of lines) {
        const [_, S, T] = line.split(" ");
        const [hh, mm, ss] = S.split(":");
        const end = 
              Number(hh) * 3600000 +
              Number(mm) * 60000 +
              Number(ss) * 1000;
        const t = Number(T.replace("s", "")) * 1000;
        const start = end - t + 1;
        
        logs.push([start, end]);
    }
    
    let maxCount = -Infinity;
    for(const [_, windowStart] of logs) {
        const windowEnd = windowStart + 999;
        let count = 0;
        
        for(const [logStart, logEnd] of logs) {
            if(logStart <= windowEnd && logEnd >= windowStart) count += 1;
        }
        maxCount = Math.max(maxCount, count);
    }
    
    return maxCount;
}