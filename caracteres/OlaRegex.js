const text = "i'm watching Dr. House in my house";

const regex = /house/gi;
console.log(text.match(regex)); // [ 'House', 'house' ]

const newRegex = /Dr. House/gi;
console.log(text.match(newRegex)); // [ 'Dr. House' ]

const regexWithoutFlag = /house/;
console.log(text.match(regexWithoutFlag));
/*
[
  'house',
  index: 29,
  input: "i'm watching Dr. House in my house",
  groups: undefined
]
*/
