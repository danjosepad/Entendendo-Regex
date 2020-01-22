const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// * - > Zero ou mais
const regex = /fogo*/gi;

// O * quer dizer que a letra anterior (o), pode não aparecer ou aparecer várias vezes

console.log(text1.match(regex)); // [ 'fogo', 'FOGOOOO' ]
console.log(text2.match(regex)); // [ 'fog' ]
