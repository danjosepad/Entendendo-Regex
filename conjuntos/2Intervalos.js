const text = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(text.match(/[a-z]/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.match(/[b-d]/g)); // [ 'b', 'c', 'd' ]
console.log(text.match(/[2-4]/g)); // [ '2', '3', '4' ]

console.log(text.match(/[A-Z1-3]/gi));
/*
[
  '1', '2', '3',
  'a', 'b', 'c',
  'd', 'e', 'f'
]
*/
