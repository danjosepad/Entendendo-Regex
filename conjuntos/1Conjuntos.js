const text = "1,2,3,4,5,6,a.b c!d?e[f";

// Para definir uma classe(ou conjunto) de caracteres usa o []

const regexEvens = /[02468]/g;
console.log(text.match(regexEvens)); // [ '2', '4', '6' ]

const text2 = "João não vai passear na moto";
const regexWIthOrWithoutAccent = /n[aã]/g;
console.log(text2.match(regexWIthOrWithoutAccent)); // [ 'nã', 'na' ]
