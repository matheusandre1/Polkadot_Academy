soma = 0
numero = 1
while numero != 0:
    numero = int(input("Digite um número: "))
    soma = soma + numero
    if numero == 0:
        print("A soma total dos números foi:", soma)