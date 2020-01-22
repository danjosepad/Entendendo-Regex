const text = "1,2,3,4,5,6,a.b c!d?e";

const commaRegex = /,/;
console.log(text.split(commaRegex)); // [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(text.match(commaRegex)); // [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]

console.log(text.match(/,/g)); // [ ',', ',', ',', ',', ',', ',' ], 6 virgulas
console.log(text.match(/A/g)); // null, pois não reconhece o case
console.log(text.match(/A/gi)); //[ 'a' ], pois a flag i reconhece case
