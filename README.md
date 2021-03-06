# :clipboard: Entendendo Regex
Principais conceitos de regex, conhecimento e exercicios adquiridos através do curso Fundamentos de Expressões Regulares (Regex)  na Udemy: https://www.udemy.com/course/curso-regex/

O conteúdo apresentado a seguir será realizado utilizando JavaScript, mas pode ser utilizado em várias outras linguagens.

# :scroll: Sumário

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
    
4.  [Grupos](#Grupos)
    - [Retrovisores](#Retrovisores)
    - [Grupos Aninhados](#Grupos-Aninhados)
    - [Cuidados](#Cuidados)
    
5.  [Bordas](#Bordas)
    - [Multiline](#Multiline)
    - [Exemplos de Bordas com Caracteres](#Exemplos-de-Bordas-com-Caracteres)
    
6.  [Conclusão](#Conclusão)
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

## Grupos

É possível agrupar os elementos e tratá-los como um conjunto, negando ou com outras funções

```javascript
const text1 = "This guy is so funny... hahaha";

console.log(text1.match(/(ha)+/g)); // [ 'hahaha' ]

Perceba que o ha foi tratado como um conjunto de palavas e somados de forma a retornar o resultado desejado.

const text2 = "http://www.site.info www.school.ninja google.com";

console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
// [ 'http://www.site.info', 'www.school.ninja', 'google.com' ]
```

### Retrovisores


Pode-se repetir a captura(grupo) referenciando com o numero do grupo

Veja o exemplo a seguir, repetindo o primeiro grupo

```javascript
const text1 = "<b>Spotlights</b><strong>Forte</strong><div>Content</div>";

console.log(text1.match(/<(\w+)>.*\/\1>/g));
// [ '<b>Spotlights</b>', '<strong>Forte</strong>', '<div>Content</div>' ]
```

```javascript
const text2 = "Slowly is a slow mind";

console.log(text2.match(/(slow)(ly).*\1/gi)); // [ 'Slowly is a slow' ]
console.log(text2.match(/(?:slow)(ly).*\1/gi)); 

 ?: não captura valor
```

### Grupos Aninhados

É possível usar grupos aninhados entre si para pegar partes diferentes da correspondência.

Como exemplo, vamos buscar o hiper, super e mini de um "market"

```javascript

console.log(text.match(/(super|hiper|mini)?market/g));
// [ 'supermarket', 'hipermarket', 'minimarket', 'market' ]

console.log(text.match(/((hi|su)per|mini)?market/g)); // Uso de grupos aninhados
// [ 'supermarket', 'hipermarket', 'minimarket', 'market' ]

```

### Cuidados 

 Dentro de um conjunto os grupos não existem
 
```javascript
const text = "Johnathan (son of John Silva) is a doctor on ABC";

console.log(text.match(/[(abc)]/g)); 
//[ 'a', 'a', '(', 'a', ')', 'a', 'c' ]
```

Mas o contrário pode acontecer

```javascript

console.log(text.match(/([abc])/g)); // [ 'a', 'a', 'a', 'a', 'c' ]
```
Evite grupos desnecessários, para atender exatamente o que é solicitado

## Bordas

As bordas definem onde as palavras serão encontadas nas correspondências, ou nos limites de palavras.

```javascript
const text = "Elevis was a legend in combat\n, but now he can't battle anymore";

console.log(text.match(/e/gi)); // [ 'e', 'e', 'e', 'e', 'e' ]

//Inicio da linha/string
console.log(text.match(/^e/gi)); // [ 'E' ] (Elevis)

//Fim da linha/string
console.log(text.match(/e$/gi)); // [ 'e' ] (anymore)

```

### Multiline

```javascript
const text = `
First phrase starts with F
Second phrase starts with S
Third phrase starts with T
`;

//Visualiza as quebas de linhas
console.log(text.match(/\n/g)); // [ '\n', '\n', '\n', '\n' ]

console.log(text.match(/^(\w).+\1$/gi)); // null
```
Com a tag multiline, se torna possível capturar as bordas entre as correspondências, veja o exemplo a seguir.

```javascript
console.log(text.match(/^(\w).+\1$/gim));
/*
[
  'First phrase starts with F',
  'Second phrase starts with S',
  'Third phrase starts with T'
]
*/
```

### Exemplos de Bordas com Caracteres

```javascript
const text1 =
  "monday tuesday wednesday thursday friday saturday sunday daysgone day";

// Começo da string
console.log(text1.match(/\bday\w*/gi)); // [ 'daysgone', 'day' ]

//Final da string
console.log(text1.match(/\w+day/gi));
/*
[
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]
*/

//Todas as ocorrências que tenham "day"
console.log(text1.match(/\w*day\w*/gi));
/*
[
  'monday',    'tuesday',
  'wednesday', 'thursday',
  'friday',    'saturday',
  'sunday',    'daysgone',
  'day'
]
*/
// borda é não \w, que é [^A-Za-z0-9_]
//Temos problemas com acentos, pois eles também são caracterizados como bordas

const text2 = "dia diatônico diafragma, média wikipédia bom-dia melodia radial";

console.log(text2.match(/\bdia\b/gi)); // [ 'dia', 'dia', 'dia', 'dia' ]
/*
O regex selecionou
dia diatônico diafragma, média wikipédia bom-dia melodia radial
ESSE                     ESSE     ESSE    ESSE
pois estao seguidos de "borda"
*/

//Como solucionar
console.log(text2.match(/(\S*)?dia(\S*)?/gi)); //a virgula também entrou
/*
[
  'dia',
  'diatônico',
  'diafragma,',
  'média',
  'wikipédia',
  'bom-dia',
  'melodia',
  'radial'
]
*/
console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)/gi)); //não vem com virgula
/*
[
  'dia',       'diatônico',
  'diafragma', 'média',
  'wikipédia', 'bom-dia',
  'melodia',   'radial'
]
*/
```
## Conclusão

Encerramos aqui, ao menos por enquanto, o conteúdo sobre Expressões Regulares, o intuito da criação desse repositório é apenas dar uma visão geral, bem como o uso de exemplos para facilitar o seu dia-a-dia.

Caso queira uma visão ainda mais ampla do conteúdo apresentado aqui, volto a dizer que o conteúdo apresentado no curso [Fundamentos de Expressões Regulares (Regex)](https://www.udemy.com/course/curso-regex/) irá com certeza melhorar o seu entendimento e ajudar você a melhorar ainda mais suas aplicações.

Espero que o conteúdo apresentado aqui ajude a todos, e até a próxima!
