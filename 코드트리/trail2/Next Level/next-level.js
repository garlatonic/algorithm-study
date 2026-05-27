const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class NextLevel {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
}

const one = new NextLevel("codetree", 10);
const two = new NextLevel(user_id, level);

console.log(`user ${one.id} lv ${one.value}`);
console.log(`user ${two.id} lv ${two.value}`);