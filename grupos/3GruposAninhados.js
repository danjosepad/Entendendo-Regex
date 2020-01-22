const text = "supermarket hipermarket minimarket market";

console.log(text.match(/(super|hiper|mini)?market/g));
// [ 'supermarket', 'hipermarket', 'minimarket', 'market' ]

console.log(text.match(/((hi|su)per|mini)?market/g)); // Uso de grupos aninhados
// [ 'supermarket', 'hipermarket', 'minimarket', 'market' ]
