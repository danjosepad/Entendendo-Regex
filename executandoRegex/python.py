import re # Import das expressoes regulares

text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

pattern9 = re.compile('9') # 9
match1 = re.search(pattern9, text)
print "Positions: %s, %s; Value: %s." % (match1.start(), match1.end(), match1.group(0))
'''
match1.start() = Indice de inicio que achou o elemento
match1.end() = Indice final
match1.group(0) = Primeiro elemento encontrado
'''

#Positions: 18, 19; Value: 9.

values = re.findall('[a-f]', text)
print "Values: %s" % valores # Values: ['a', 'b', 'c', 'd', 'e', 'f']