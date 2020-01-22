const text = "John won 120 million playing 6 9 21 23 45 46 on lotteries";

// Para definir um quantificador usa {}

// De 1 a 2
console.log(text.match(/\d{1,2}/g));
/*
[
  '12', '0',  '6',
  '9',  '21', '23',
  '45', '46'
]
*/
// Número com apenas 2
console.log(text.match(/[0-9]{2}/g)); // [ '12', '21', '23', '45', '46' ]

// 1 ou mais
console.log(text.match(/\d{1,}/g));
/*
[
  '120', '6',
  '9',   '21',
  '23',  '45',
  '46'
]
*/
// Palavras com até 7 caracteres
console.log(text.match(/\w{7}/g)); // [ 'million', 'playing', 'lotteri' ]

//Palavras com 7 caracteres ou mais
console.log(text.match(/[\w]{7,}/g)); // [ 'million', 'playing', 'lotteries' ]
