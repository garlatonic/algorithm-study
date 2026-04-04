let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let obj = {};
for (i = 1; i < input.length; i++) {
  let [name, status] = input[i].split(" ");
  if (status === "enter") {
    obj[name] = status;
  } else if (obj[name] === "enter" && status === "leave") {
    delete obj[name];
  }
}

console.log(Object.keys(obj).sort().reverse().join("\n"));