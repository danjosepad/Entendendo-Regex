const text = `
First phrase starts with F
Second phrase starts with S
Third phrase starts with T
`;

//Visualiza as quebas de linhas
console.log(text.match(/\n/g)); // [ '\n', '\n', '\n', '\n' ]

console.log(text.match(/^(\w).+\1$/gi)); // null

console.log(text.match(/^(\w).+\1$/gim));
/*
[
  'First phrase starts with F',
  'Second phrase starts with S',
  'Third phrase starts with T'
]
*/
