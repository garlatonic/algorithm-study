function solution(user_id, banned_id) {
    const bannedMap = new Map();
    
    for(const banned of banned_id) {
        const data = bannedMap.get(banned) || { count: 0, ids: [] };
        bannedMap.set(banned, { count: data.count + 1, ids: [] });
    }
    
    bannedMap.forEach((v, k) => {
        for(const user of user_id) {
            if(k.length !== user.length) continue;
            
            const n = user.length;
            let isSame = true;
            for(let i = 0; i < n; i++) {
                if(k[i] === "*") continue;
                if(k[i] !== user[i]) {
                    isSame = false;
                    break;
                }
            }
            
            if(isSame) {
                v.ids.push(user);
            }
        }
    });
    
    const patterns = [];
    bannedMap.forEach((v) => {
        for(let i = 0; i < v.count; i++) {
            patterns.push(v.ids);
        }
    });
    const resultSet = new Set();
    
    function dfs(index, chosen) {
        if(index === patterns.length) {
            resultSet.add([...chosen].sort().join(","));
            return;
        }
        
        for(const user of patterns[index]) {
            if(chosen.has(user)) continue;
            
            chosen.add(user);
            dfs(index + 1, chosen);
            chosen.delete(user);
        }
    }
    
    dfs(0, new Set());
    return resultSet.size;
}