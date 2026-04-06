const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const pokemons = input.slice(1, N + 1).map((line) => line.trim());
const quest = input.slice(N + 1).map((line) => line.trim());

const pokemonMap = new Map();
for (let i = 0; i < N; i++) {
  pokemonMap.set(i + 1, pokemons[i]);
  pokemonMap.set(pokemons[i], i + 1);
}

for (let i = 0; i < M; i++) {
  const q = quest[i];
  if (isNumber(q)) {
    console.log(pokemonMap.get(Number(q)));
  } else {
    console.log(pokemonMap.get(q));
  }
}

function isNumber(str) {
  return !isNaN(Number(str));
}
