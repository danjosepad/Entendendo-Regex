// Alguns cuidados

const text = "Johnathan (son of John Silva) is a doctor on ABC";

console.log(text.match(/[(abc)]/g)); // Dentro de um conjunto os grupos não existem
//[ 'a', 'a', '(', 'a', ')', 'a', 'c' ]

// Mas o contrário pode acontecer
console.log(text.match(/([abc])/g)); // [ 'a', 'a', 'a', 'a', 'c' ]

// Evite grupos desnecessários, para atender exatamente o que é solicitado
