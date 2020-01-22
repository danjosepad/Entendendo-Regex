const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNine = RegExp("9");
console.log("RegExp methods");

console.log(regexNine.test(text)); // Retorna true, pois encontrou 9
console.log(regexNine.exec(text));
/*
[
  '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined
]
*/

const lettersRegex = /[a-f]/g;
console.log("String methods");
console.log(text.match(lettersRegex)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.search(lettersRegex)); // 20 (Indice que achou a primeira ocorrência)
console.log(text.replace(lettersRegex, "found")); //Substituir algum elemento da regex por outro texto
// 0,1,2,3,4,5,6,7,8,9,found,found,found,found,found,found
console.log(text.split(lettersRegex)); //Gerar um array a partir de todas os matchs da regex
// [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
