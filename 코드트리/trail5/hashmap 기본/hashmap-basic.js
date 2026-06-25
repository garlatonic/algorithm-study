const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(command => command.split(" "));

// Please Write your code here.
const hashmap = new Map();
for (const command of commands) {
    const [cmd, key, value] = command;

    switch (cmd) {
        case "add":
            hashmap.set(key, value);
            break;

        case "remove":
            hashmap.delete(key);
            break;

        case "find":
            console.log(hashmap.get(key) ?? "None");
            break;
    }
}