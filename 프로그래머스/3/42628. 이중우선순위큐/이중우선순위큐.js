function solution(operations) {
    const queue = [];
    
    for(const operation of operations) {
        let [o, num] = operation.split(" ");
        num = Number(num);
        
        if(o === "I") {
            queue.push(num);
        } else {
            // 빈 큐에 데이터를 삭제하라는 연산이 들어올 경우
            if(queue.length === 0) continue;
            
            const target = num === 1 ? Math.max(...queue) : Math.min(...queue);
            const index = queue.indexOf(target);
            queue.splice(index, 1);
        }
    }
    
    if(queue.length === 0) return [0, 0];
    return [Math.max(...queue), Math.min(...queue)];
}