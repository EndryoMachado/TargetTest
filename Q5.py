'''
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
'''
s = "tegrat"
s_invertida = ""
for i in range(len(s)-1,-1, -1):
    s_invertida += s[i]
print(s_invertida)