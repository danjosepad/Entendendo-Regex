const text = "ABC [abc] a-c 1234";

console.log(text.match(/[a-c]/g)); // [ 'a', 'b', 'c', 'a', 'c' ]

//Não define um range
console.log(text.match(/a-c/g)); // [ 'a-c' ]

// Intervalos usam a ordem da tabela UNICODE
console.log(text.match(/[A-z]/g));
/*
[
  'A', 'B', 'C', '[',
  'a', 'b', 'c', ']',
  'a', 'c'
]
*/

console.log(text.match(/[a-Z]/g)); // Range out of order in character class
// Não segue a ordem da tabela, portanto a range não faz sentido ao compilar
