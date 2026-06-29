function solution(name, yearning, photo) {
    const n = name.length;
    const score = new Map();
    
    for(let i = 0; i < n; i++) {
        score.set(name[i], yearning[i]);
    }
    
    return photo.map((p) => p.reduce((acc, cur) => acc + (score.get(cur) ?? 0), 0));
}