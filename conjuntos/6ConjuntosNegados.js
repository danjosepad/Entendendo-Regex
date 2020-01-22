const text = "1,2,3,a.b c!d?e[f";

// ^ representa a negacao dentro do conjunto
console.log(text.match(/\D/g));
console.log(text.match(/[^0-9]/g));
/*
[
  ',', ',', ',', 'a',
  '.', 'b', ' ', 'c',
  '!', 'd', '?', 'e',
  '[', 'f'
]
*/
console.log(text.match(/[^\d!\?\[\s,.]/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const text2 = '1: !"#$%& ()*+,-./ 2: :;<=>?@';

console.log(text2.match(/[^!-/:-@\s]/g)); // [ '1', '2' ]
// Para cancelar o efeito do ^ caso queira coloca-lo, basta adicionar o escape
// \^
