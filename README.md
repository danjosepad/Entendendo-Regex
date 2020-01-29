# Entendendo Regex
Principais conceitos de regex, conhecimento e exercicios adquiridos através do curso Fundamentos de Expressões Regulares (Regex)  na Udemy: https://www.udemy.com/course/curso-regex/

O conteúdo apresentado a seguir será realizado utilizando JavaScript, mas pode ser utilizado em várias outras linguagens.

# Sumário

1.  [Caracteres Simples](#Caracteres-Simples)
    - [Meta Caracteres](#Meta-Caracteres)
    - [Ponto](#Ponto)
    - [Espaços em Branco](#Espaços-em-Branco)
    - [Pipe](#Pipe)
    - [Dotall(Problema no JavaScript e Solução)](#Dotall)
    
2.  [Conjuntos](#Conjuntos)
    - [Intervalos](#Intervalos)
    - [Conjuntos com Metacaracteres](#Conjuntos-com-Metacaracteres)
    - [Shorthands](#Shorthands)
    - [Negações](#Negações)
    - [Conjuntos com Unicode](#Conjuntos-com-Unicode)

3.  [Quantificadores](#Quantificadores)
    - [Zero ou Um (?)](#Zero-ou-Um)
    - [Um ou Mais (+)](#Um-ou-Mais)
    - [Zero ou Mais (*)](#Zero-ou-Mais)
    - [Chaves](#Chaves)
    - [Quantificadores Gulosos e Não Gulosos](#Quantificadores-Gulosos-e-Não-Gulosos)
    
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

Para uso do Unicode, pode-se usar a tabela [Unicode](https://unicode-table.com/pt/) para consultar os caracteres a serem referenciados.

```javascript

const text = "a¢ǣd";

console.log(text.match(/a\u00A2\u01E3/));
// [ 'a¢ǣ', index: 0, input: 'a¢ǣd', groups: undefined ]

// o \u, junto a o código do texto presente na tabela do unicode consegue referenciar ao caracter desejado
```
## Conjuntos 

 Com os conjuntos, é possível delimitar um grupo de caracteres que serão pesquisados. Ele pesquisará correspondências para qualquer um dos caracteres dentro dos colchetes
 
 Para definir uma classe(ou conjunto) de caracteres usa-se o []
 
```javacripst
const text = "1,2,3,4,5,6,a.b c!d?e[f";

const regexEvens = /[02468]/g;
console.log(text.match(regexEvens)); // [ '2', '4', '6' ]
```
### Intervalos

Com os intervalos é possível delimitar um escopo da qual deseja buscar

Eles seguem a ordem da tabale [Unicode](https://unicode-table.com/pt/).

```javascript
const text = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(text.match(/[a-z]/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.match(/[b-d]/g)); // [ 'b', 'c', 'd' ]
console.log(text.match(/[2-4]/g)); // [ '2', '3', '4' ]
```

### Conjuntos com Metacaracteres

```javascript
const text = ".$+@?-";


console.log(text.match(/[+.?*$]/g)); //[ '.', '$', '+', '?' ]
Serão selecionadas os caracteres presentes no conjunto

console.log(text.match(/[$-?]/g)); // [ '.', '$', '+', '?', '-' ]
Quando passado com intervalo, os metacaracteres tambem se comportam como caractere,
e trazem um intervalo dentre eles

```

### Shorthands

As shorthands são formas simplificadas de definir os intervalos entre os caracteres

Como exemplo:
```javascript
const text = `1,2,3,4,5,6,a.b c!d?e   -
f_g`;

console.log(text.match(/\d/g)); // [ '1', '2', '3', '4', '5', '6' ]

Essa linha de código retornará todos os digitos, e funcionaria da mesma forma que [0-9]
```
Estes são outros exemplos que o uso de Shorthand pode facilitar na escrita dos códigos.

```javascript

// Não numeros [^0-9]
console.log(text.match(/\D/g));
/*
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  ' ', ' ', ' ', '-', '\n',
  'f', '_', 'g'
]
*/


//Caracteres [a-zA-Z0-9_]
console.log(text.match(/\w/g));
/*
[
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e', 'f',
  '_', 'g'
]
*/


//Não caracteres [^a-zA-Z0-9_]
console.log(text.match(/\W/g));
/*
[
  ',', ',', ',',  ',',
  ',', ',', '.',  ' ',
  '!', '?', ' ',  ' ',
  ' ', '-', '\n'
]
*/


// Espaço [ \t\n\r\f]
console.log(text.match(/\s/g)); // [ ' ', ' ', ' ', ' ', '\n' ]


// Não espaço [^ \t\n\r\f]
console.log(text.match(/\S/g));
/*
[
  '1', ',', '2', ',', '3',
  ',', '4', ',', '5', ',',
  '6', ',', 'a', '.', 'b',
  'c', '!', 'd', '?', 'e',
  '-', 'f', '_', 'g'
]
*/
```

### Negações

Com negações, é possível dizer que queremos as correspondências que NÃO fazem parte do conjunto

```javascript
const text = "1,2,3,a.b c!d?e[f";

// ^ representa a negacao dentro do conjunto
console.log(text.match(/[^0-9]/g));
/*
[
  ',', ',', ',', 'a',
  '.', 'b', ' ', 'c',
  '!', 'd', '?', 'e',
  '[', 'f'
]
*/

Ou, usando shorthand

console.log(text.match(/\D/g));
```
### Conjuntos com Unicode

Como mencionado anteriormente, é possível aplicar a regra dos intervalos dentro de um conjunto também aos unicodes.

```javascript
const text = "áéíóú àèìòù âêîôû ç ãõ ü";

console.log(text.match(/[À-ü]/g));
/*
[
  'á', 'é', 'í', 'ó', 'ú',
  'à', 'è', 'ì', 'ò', 'ù',
  'â', 'ê', 'î', 'ô', 'û',
  'ç', 'ã', 'õ', 'ü'
]
*/
```
## Quantificadores 

Os quantificadores indicam quantas vezes o caracter irá aparecer em uma correspondência

### Zero ou Um
```javascript
const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// ? - > Zero ou um (opcional)

const regex = /fogo?/gi;

// O ? quer dizer que a letra anterior (o), pode ou nao aparecer

console.log(text1.match(regex)); // [ 'fogo', 'FOGO' ]
console.log(text2.match(regex)); // [ 'fog' ]
```
### Um ou Mais

```javascript
const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// + - > Um ou mais

const regex = /fogo+/gi;

// O + quer dizer que a letra anterior (o), pode aparecer um ou mais vezes

console.log(text1.match(regex)); // [ 'fogo', 'FOGOOOO' ]
```
Em outro exemplo, junto a conjuntos, pode-se trazer todos os conjuntos de uma vez

```javascript

const text3 = "The numbers: 0123456789.";
console.log(text3.match(/[0-9]/g));
/*
[
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
]
*/

// Pega o conjunto de numeros, trazendo todos de uma vez
console.log(text3.match(/[0-9]+/g)); // [ '0123456789' ]
```

### Zero ou Mais

```javascript

const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO";
const text2 = "There is a big fog in NYC";

// * - > Zero ou mais
const regex = /fogo*/gi;

// O * quer dizer que a letra anterior (o), pode não aparecer ou aparecer várias vezes

console.log(text1.match(regex)); // [ 'fogo', 'FOGOOOO' ]
console.log(text2.match(regex)); // [ 'fog' ]
```

### Chaves

Através das chaves, é possível definir um alcance para o quantificador

```javascript
const text = "John won 120 million playing 6 9 21 23 45 46 on lotteries";

 Para definir um quantificador usa {}

// De 1 a 2
console.log(text.match(/\d{1,2}/g));
/*
[
  '12', '0',  '6',
  '9',  '21', '23',
  '45', '46'
]
*/

// Número com apenas 2
console.log(text.match(/[0-9]{2}/g)); // [ '12', '21', '23', '45', '46' ]

// 1 ou mais
console.log(text.match(/\d{1,}/g));
/*
[
  '120', '6',
  '9',   '21',
  '23',  '45',
  '46'
]
*/

// Palavras com até 7 caracteres
console.log(text.match(/\w{7}/g)); // [ 'million', 'playing', 'lotteri' ]

// Palavras com 7 caracteres ou mais
console.log(text.match(/[\w]{7,}/g)); // [ 'million', 'playing', 'lotteries' ]
```

### Quantificadores Gulosos e Não Gulosos

Os quantificadores por padrão irão extender o resultado ao máximo possível, veja o exemplo a seguir

```javascript
const text = "<div>Content 01</div><div>Content 02></div>";

console.log(text.match(/<div>.+<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]
console.log(text.match(/<div>.*<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]
console.log(text.match(/<div>.{0,100}<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]
```

Perceba que, ao buscar com a div, ele corresponderá a toda a extensão, mesmo que as tags fechem
no meio do texto, para isso.

Veja o exemplo tornando um quantificador NÃO guloso

```javascript
console.log(text.match(/<div>.+?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
console.log(text.match(/<div>.*?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
console.log(text.match(/<div>.{0,100}?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
```

Dessa forma, é possível delimitar o  alcance, buscando o resultado desejado.
