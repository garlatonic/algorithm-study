const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const hashmap = new Map();
for (let i = 0; i < n; i++) {
    if (hashmap.has(arr[i])) {
        const indexes = hashmap.get(arr[i]);
        hashmap.set(arr[i], indexes.add(i));
    } else {
        hashmap.set(arr[i], new Set([i]));
    }
}

let count = 0;
for (const [value, key] of hashmap) {
    const op = k - value;
    if (!hashmap.has(op)) continue;

    const opSet = hashmap.get(op);

    if (value === op) {
        // 같은 그룹 내 조합
        const sz = key.size;
        count += (sz * (sz - 1)) / 2;
    } else {
        // 두 그룹 간 곱
        count += key.size * opSet.size;
    }

    hashmap.delete(value);
    hashmap.delete(op);
}

console.log(count);