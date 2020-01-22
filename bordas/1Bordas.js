const text = "Elevis was a legend in combat\n, but now he can't battle anymore";

console.log(text.match(/e/gi)); // [ 'e', 'e', 'e', 'e', 'e' ]

//Inicio da linha/string
console.log(text.match(/^e/gi)); // [ 'E' ] (Elevis)

//Fim da linha/string
console.log(text.match(/e$/gi)); // [ 'e' ] (anymore)

console.log(text.match(/^E.*e$/gi)); //null
// Problema do dotall, o ponto não resolve o \n

//Para isso
