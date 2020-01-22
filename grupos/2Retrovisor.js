const text1 = "<b>Spotlights</b><strong>Forte</strong><div>Content</div>";

//Retrovisores

// Pode-se repetir a captura(grupo) referenciando com o numero do grupo
console.log(text1.match(/<(\w+)>.*\/\1>/g));
// [ '<b>Spotlights</b>', '<strong>Forte</strong>', '<div>Content</div>' ]

const text2 = "Slowly is a slow mind";
console.log(text2.match(/(slow)(ly).*\1/gi)); // [ 'Slowly is a slow' ]
console.log(text2.match(/(?:slow)(ly).*\1/gi)); // ?: não captura valor

const text3 = "abcdefghijkll";
console.log(text3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));
// [ 'abcdefghijkll' ]
// JS suporta mais de 9 grupos de retrovisores
