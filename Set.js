const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesSemRepeticao = [... new Set(nomes)];

console.log(nomesSemRepeticao);