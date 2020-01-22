//Para isso

const text = "Elevis was a legend in combat\n, but now he can't battle anymore";
console.log(text.match(/^e[\s\S]*e$/gi)); // [ "Elevis was a legend in combat\n, but now he can't battle anymore" ]
//[\s\S] seleciona tudo, supre a função do .
