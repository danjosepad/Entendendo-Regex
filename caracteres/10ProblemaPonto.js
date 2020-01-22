const text = "Good\nMorning";

console.log(text.match(/.../gi)); // [ 'Goo', 'Mor', 'nin' ] Não reconhece o \n
console.log(text.match(/..../gi)); // [ 'Good', 'Morn' ]

// O ponto nao engloba o \n
// o dotall é implementado em alguns lingaugens, com um /s, o JS não possui tal funcionalidade
