const tintColor = (txt, reg, color) =>
  txt.replace(reg, `<span style="color: #${color}"><b>$1</b></span>`);

const files = require("./files");
const text = files.read("codigoFonte.html");

const codeRegex = /<code>[\s\S]*<\/code>/i;
let code = text.match(codeRegex)[0];

// String...
code = tintColor(code, /(\".*\")/g, "ce9178");

// Palavras reservadas
code = tintColor(code, /\b(package|public|class|static|if|else)\b/g, "d857cf");

// Tipos
code = tintColor(code, /\b(void|int)\b/g, "1385e2");

// Comentarios de multiplas linhas
code = tintColor(code, /(\/\*[\s\S]*\*\/)/g, "267703");

// Comentários de uma linha
code = tintColor(code, /(\/\/.*?\n)/g, "267703");

const finalContent = text.replace(codeRegex, code);
files.write("codigofonte.html", finalContent);
