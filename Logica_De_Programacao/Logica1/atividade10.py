contador = 0
for i in range(0, 6):
    numero = int(input("Digite o número: "))
    if numero > 0:
        contador += 1

print("Quantidade de números positivos: ", contador)