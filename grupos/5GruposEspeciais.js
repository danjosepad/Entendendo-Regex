const text = "John is a calm person, but get nervous when he drives.";

console.log(text.match(/[\wÀ-ú]+/gi));
/*
[
  'John',   'is',
  'a',      'calm',
  'person', 'but',
  'get',    'nervous',
  'when',   'he',
  'drives'
]
*/

//Positive lookahead (Criar um grupo a frente para selecionar a primeira expressao)

console.log(text.match(/[\wÀ-ú]+(?=,)/gi)); // [ 'person' ]
/*
A expressao (?=,) pede para buscar uma virgula na frente de alguma palavra que 
segue o padrao anterior
*/

console.log(text.match(/[\wÀ-ú]+(?=\.)/gi)); // [ 'drives' ]

//Negative lookahead

console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi));
// Palavras que não estejam na frente de virgula

/*
  'John',    'is',
  'a',       'calm',
  'but',     'get',
  'nervous', 'when',
  'he',      'drives'
]
*/
