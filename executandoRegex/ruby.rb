text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

regexNine = Regexp:new('9')
puts regexNine.match(text) # Encontrou dentro do texto o valor 9
# Ou 
regexNine = %r{9}
puts regexNine.match(text) # Retorna 9

puts regexNine =~ '894' # (1) Achou dentro do texto, a partir da expressao regexNine = %r{9}

lettersRegex = /[a-f]/
puts texto.scan(lettersRegex).join() 
# Procura no texto todas as ocorrencias da ocorrencia, e join junta tudo em uma linha
# abcdef

puts texto.split(/,/).join() # 0123456789abcdef

print texto.split(/aeiou/)
# ["0,1,2,3,4,5,6,7,8,9,", ",a,b,c,d,", ",f"]