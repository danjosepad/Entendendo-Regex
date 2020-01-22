// Meta Caracteres

const text = "1,2,3,4,5,6,a.b c!d?e";

const dotRegex = /\./g;
console.log(text.split(dotRegex)); // [ '1,2,3,4,5,6,a', 'b c!d?e' ]

const symbolsRegex = /,|\.|\?|!| /g;
console.log(text.split(symbolsRegex));
/*
[ '1', '2', '3', '4','5', '6', 'a', 'b','c', 'd', 'e']
*/
