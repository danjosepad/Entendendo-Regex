# Entendendo Regex
Principais conceitos de regex, conhecimento e exercicios adquiridos através do curso Fundamentos de Expressões Regulares (Regex)  na Udemy: https://www.udemy.com/course/curso-regex/

O conteúdo apresentado a seguir será realizado utilizando JavaScript, mas pode ser utilizado em várias outras linguagens.

# Sumário

1.  [Caracteres Simples](#Caracteres-Simples)
    - [Meta Caracteres](#Meta-Caracteres)
    - [Ponto](#Ponto)
    - [Espaços em Branco](#Espaços-em-Branco)
    - [Pipe](#Pipe)
    - [Dotall(Problema no JavaScript e Solução](#Dotall)
## Caracteres Simples

```javascript
const text = "1,2,3,4,5,6,a.b c!d?e";

const commaRegex = /,/;
console.log(text.split(commaRegex)); // [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(text.match(commaRegex)); // [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]

console.log(text.match(/,/g)); // [ ',', ',', ',', ',', ',', ',' ], 6 virgulas
console.log(text.match(/A/g)); // null, pois não reconhece o case
console.log(text.match(/A/gi)); //[ 'a' ], pois a flag i reconhece case
```
### Meta Caracteres
```javascript
const symbolsRegex = /,|\.|\?|!| /g;
console.log(text.split(symbolsRegex));
/*
[ '1', '2', '3', '4','5', '6', 'a', 'b','c', 'd', 'e']
*/
```

### Ponto
```javascript
// . é um coringa, válido para uma posição

const text = "1,2,3,4,5,6,7,8,9,0";

console.log(text.match(/1.2/g)); // [ '1,2' ]
//Pega qualquer coisa existente entre o 1 e o 2

```

### Espaços em Branco
```JavaScript
const text = `
st	y
l	e s!
`;

console.log(text.match(/st\ty\nl\te\ss!/));

// \t representa o uso do tab, \n queba de linha e \s espaço
```

### Pipe
```javascript
const text = "You need to answer yes, no or maybe";

console.log(text.match(/yes|no|maybe/g)); // [ 'yes', 'no', 'maybe' ]

// O pipe é responsável por pegar OU um, ou outro parametro
```

### Dotall

O dotall é responsável por pegar TODO o conteúdo, independente do tipo
```javascript
const text = "Good\nMorning";

console.log(text.match(/.../gi)); // [ 'Goo', 'Mor', 'nin' ] Não reconhece o \n
console.log(text.match(/..../gi)); // [ 'Good', 'Morn' ]

// O ponto nao engloba o \n
/*
o dotall é implementado em algumas linguagens, mas o JS não possui tal funcionalidade
que consegue realmente englobar todos os caracteres
*/
```
Para isso

```javascript
const text = "Elevis was a legend in combat\n, but now he can't battle anymore";

console.log(text.match(/^e[\s\S]*e$/gi)); 
// [ "Elevis was a legend in combat\n, but now he can't battle anymore" ]

//[\s\S] seleciona tudo, suprindo a função do . no JavaScript
```

### Unicode

Para uso do Unicode, pode-se usar o site https://unicode-table.com/pt/ para consultar os caracteres a serem referenciados.

```javascript

const text = "a¢ǣd";

console.log(text.match(/a\u00A2\u01E3/));
// [ 'a¢ǣ', index: 0, input: 'a¢ǣd', groups: undefined ]

// o \u, junto a o código do texto presente na tabela do unicode consegue referenciar ao caracter desejado

```
