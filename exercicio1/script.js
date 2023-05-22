// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.



let sacolao = []

const frutas = {nome:"banana",preco:2.5,disponibilidade: true}

const vegetais = {nome: "alface", preco: 2, disponibilidade: false}

const bebidas = {nome: "água", preco: 3, disponibilidade: true}

sacolao.push(frutas, vegetais, bebidas)

console.log(sacolao);