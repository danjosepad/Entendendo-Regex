// g - global
// i - ignore case

const text = "Carlos assinou o abaixo-assinado";
console.log(text.match(/C|ab/));

/*
[
  'C',
  index: 0,
  input: 'Carlos assinou o abaixo-assinado',
  groups: undefined
]
*/
console.log(text.match(/c|ab/i)); //Ignora letras maisculas e minusculas
/*
[
  'ab',
  index: 17,
  input: 'Carlos assinou o abaixo-assinado',
  groups: undefined
]
*/
console.log(text.match(/c|ab/gi)); // [ 'C', 'ab' ]
/*
Alem de ignorar case, funciona de forma global, ou seja, continua a execução 
até terminar todo o texto
*/
