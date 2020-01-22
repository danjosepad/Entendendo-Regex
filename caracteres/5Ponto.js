// . é um coringa, válido para uma posição

const text = "1,2,3,4,5,6,7,8,9,0";

console.log(text.match(/1.2/g)); // [ '1,2' ]
//Pega qualquer coisa existente entre o 1 e o 2
console.log(text.match(/1..2/g));
// null, pois nao conseguiu encontrar 2 caracteres entre os 2 numeros
console.log(text.match(/1..,/g)); // [ '1,2,' ]

const grades = "8.3,7.1,8.8,10.0";
console.log(grades.match(/8../g)); // [ '8.3', '8.8' ]
console.log(grades.match(/.\../g)); // [ '8.3', '7.1', '8.8', '0.0' ]
