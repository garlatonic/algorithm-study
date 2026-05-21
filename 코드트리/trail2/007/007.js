const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class SecretCode {
    constructor(s_code, m_point, time) {
        this.code = s_code;
        this.point = m_point;
        this.time = time;
    }
}

const secretCode = new SecretCode(s_code, m_point, time);
console.log(`secret code : ${secretCode.code}`);
console.log(`meeting point : ${secretCode.point}`);
console.log(`time : ${secretCode.time}`);
