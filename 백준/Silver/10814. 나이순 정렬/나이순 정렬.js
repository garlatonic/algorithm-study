const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const members = input.slice(1).map((line) => {
  const [age, name] = line.trim().split(" ");
  return { age: +age, name };
});

members.sort((a, b) => {
  if(a.age !== b.age) return a.age - b.age;
  return 0; // 나이가 같으면 입력 순서 유지
});

members.forEach((member) => console.log(`${member.age} ${member.name}`));
