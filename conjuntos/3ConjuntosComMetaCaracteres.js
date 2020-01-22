const text = ".$+@?-";

console.log(text.match(/[+.?*$]/g)); //[ '.', '$', '+', '?' ]

//Se comportam como um caractere
console.log(text.match(/[$-?]/g)); // [ '.', '$', '+', '?', '-' ]
//Trouxe um intervalo entre os simbolos

//NÃO é um intervalo

console.log(text.match(/[$\-?]/g)); // [ '$', '?', '-' ]
//transformou o hifen em um caracter

// Pode precisar de escape dentro do conjunto: - [ ] ^
