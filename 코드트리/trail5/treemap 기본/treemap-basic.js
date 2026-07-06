const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(c => c.split(" "));

// Please write your code here.
const SortedMap = require("collections/sorted-map");
const sm = new SortedMap();

for (const command of commands) {
    const [c, k, v] = [command[0], Number(command[1]), Number(command[2])];
    if (c === "add") sm.set(k, v);
    if (c === "remove") sm.delete(k);
    if (c === "find") {
        if (sm.has(k)) console.log(sm.get(k));
        else console.log("None");
    }
    if (c === "print_list") {
        const result = [];
        for (const k of sm.keys()) {
            result.push(sm.get(k));
        }
        if (result.length === 0) console.log("None");
        else console.log(result.join(" "));
    }
}