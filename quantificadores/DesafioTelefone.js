const text = `
Lista telefônica:
- (11) 98756-1212
-98765-4321
`;

const result = text.match(/(\(\d{2}\))?\s?\d{4,5}-\d{4}/g);

console.log(result); // [ '(11) 98756-1212', '98765-4321' ]
