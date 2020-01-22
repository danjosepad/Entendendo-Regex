const text = `
Emails dos convidados:
-fulano@coder.com.br
-teste@teste.com
-oao@empresa.info.br
`;

const result = text.match(/\w+@\w+\.?\w+(\.br)?/g);

console.log(result); // [ 'fulano@coder.com.br', 'teste@teste.com', 'oao@empresa.info.br' ]
