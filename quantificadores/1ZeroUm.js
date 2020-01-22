const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// ? - > Zero ou um (opcional)

const regex = /fogo?/gi;

// A ? quer dizer que a letra anterior (o), pode ou nao aparecer

console.log(text1.match(regex)); // [ 'fogo', 'FOGO' ]
console.log(text2.match(regex)); // [ 'fog' ]
