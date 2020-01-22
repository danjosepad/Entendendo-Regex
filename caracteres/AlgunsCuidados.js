//Dicas para Regex

const singleLineText = "";

//Para delimitar uma variavel em várias linhas, usa-se o template string

const templateStringExample = `
  line 1, 
  line 2,
  ...
`;

// Cuidado com o tab
console.log("    ".match(/\s/g));
// Tab reconhece como espaço, e pode prejudicar um regex futuro caso não seja desejado
