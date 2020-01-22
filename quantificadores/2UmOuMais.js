const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// + - > Um ou mais

const regex = /fogo+/gi;

// O + quer dizer que a letra anterior (o), pode aparecer um ou mais vezes

console.log(text1.match(regex)); // [ 'fogo', 'FOGOOOO' ]
console.log(text2.match(regex)); // null

const text3 = "The numbers: 0123456789.";
console.log(text3.match(/[0-9]/g));
/*
[
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
]
*/

// Pega o conjunto de numeros, trazendo todos de uma vez
console.log(text3.match(/[0-9]+/g)); // [ '0123456789' ]
