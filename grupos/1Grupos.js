// É possível agrupar os elementos e tratá-los como um conjunto, negando ou com outras funções

const text1 = "This guy is so funny... hahaha";

console.log(text1.match(/(ha)+/g)); // [ 'hahaha' ]

const text2 = "http://www.site.info www.school.ninja google.com";

console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
// [ 'http://www.site.info', 'www.school.ninja', 'google.com' ]
