const text = `1,2,3,4,5,6,a.b c!d?e   -
f_g`;

// Números [0-9]
console.log(text.match(/\d/g)); // [ '1', '2', '3', '4', '5', '6' ]
// Não numeros [^0-9]
console.log(text.match(/\D/g));
/*
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  ' ', ' ', ' ', '-', '\n',
  'f', '_', 'g'
]
*/

//Caracteres [a-zA-Z0-9_]
console.log(text.match(/\w/g));
/*
[
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e', 'f',
  '_', 'g'
]
*/
//Não caracteres [^a-zA-Z0-9_]
console.log(text.match(/\W/g));
/*
[
  ',', ',', ',',  ',',
  ',', ',', '.',  ' ',
  '!', '?', ' ',  ' ',
  ' ', '-', '\n'
]
*/

// Espaço [ \t\n\r\f]
console.log(text.match(/\s/g)); // [ ' ', ' ', ' ', ' ', '\n' ]

// Não espaço [^ \t\n\r\f]
console.log(text.match(/\S/g));
/*
[
  '1', ',', '2', ',', '3',
  ',', '4', ',', '5', ',',
  '6', ',', 'a', '.', 'b',
  'c', '!', 'd', '?', 'e',
  '-', 'f', '_', 'g'
]
*/
