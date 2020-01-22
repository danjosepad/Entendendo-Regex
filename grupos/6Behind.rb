# O JS não suporte o positive e nem o negative lookbehing, por isso o exemplo será realizado em Ruby

text = 'supermercado superação hiperMERCADO'

puts text.scan(/(?:super)[\wÀ-ú]+/i).join(' ') #supermercado superação


# Positive Lookbehind
puts text.scan(/(?<=super)[\wÀ-ú]+/i).join(' ') #mercado ação
# O código pede para o Regex procurar a palavra super e trazer o resto

# Negative Lookbehind

puts text.scan(/(?<!super)mercado/i) # MERCADO
# Pega alguma palavra que não precede à palavra super