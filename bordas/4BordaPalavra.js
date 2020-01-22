const text1 =
  "monday tuesday wednesday thursday friday saturday sunday daysgone day";

// Começo da string
console.log(text1.match(/\bday\w*/gi)); // [ 'daysgone', 'day' ]

//Final da string
console.log(text1.match(/\w+day/gi));
/*
[
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]
*/

//Todas as ocorrências que tenham "day"
console.log(text1.match(/\w*day\w*/gi));
/*
[
  'monday',    'tuesday',
  'wednesday', 'thursday',
  'friday',    'saturday',
  'sunday',    'daysgone',
  'day'
]
*/
// borda é não \w, que é [^A-Za-z0-9_]
//Temos problemas com acentos, pois eles também são caracterizados como bordas

const text2 = "dia diatônico diafragma, média wikipédia bom-dia melodia radial";

console.log(text2.match(/\bdia\b/gi)); // [ 'dia', 'dia', 'dia', 'dia' ]
/*
O regex selecionou
dia diatônico diafragma, média wikipédia bom-dia melodia radial
ESSE                     ESSE     ESSE    ESSE
pois estao seguidos de "borda"
*/

//Como solucionar
console.log(text2.match(/(\S*)?dia(\S*)?/gi)); //a virgula também entrou
/*
[
  'dia',
  'diatônico',
  'diafragma,',
  'média',
  'wikipédia',
  'bom-dia',
  'melodia',
  'radial'
]
*/
console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)/gi)); //não vem com virgula
/*
[
  'dia',       'diatônico',
  'diafragma', 'média',
  'wikipédia', 'bom-dia',
  'melodia',   'radial'
]
*/
