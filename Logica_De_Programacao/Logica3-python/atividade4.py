
frase = input()

palindromo = frase[::-1]

if frase == palindromo:
    print("É palíndromo")
else:
    print("Não é palíndromo")