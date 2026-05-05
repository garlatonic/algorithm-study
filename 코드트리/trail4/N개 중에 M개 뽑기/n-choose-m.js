const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
const number = [];
function choose(count, num) {
    if (count === m) {
        console.log(number.join(" "));
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (i <= num) continue;
        number.push(i);
        choose(count + 1, i);
        number.pop();
    }
}

choose(0, 0);