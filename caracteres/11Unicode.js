/*

No inicio...
UM byte(8 bits) - 256 caracteres
Mapeia alguns simbolos, pontuacao, A-Z, a-z, 0-9

Outro tipo de encode, com dois bytes (16 bits) - 65500+ caracteres
+ simbolos, + pontuacao, A-Z, a-z, 0-9

Unicode trouxe quantidade de bytes variavel
Expandivel
Suporta mais de 1 Milhão de caracteres
Atualmente tem mais de 100.000 caracteres atribuidos

https://unicode-table.com/pt/

*/

const text = "a¢ǣd";
console.log(text.match(/a\u00A2\u01E3/));
// [ 'a¢ǣ', index: 0, input: 'a¢ǣd', groups: undefined ]
// o \u, junto a o código do texto presente na tabela do unicode consegue referenciar
