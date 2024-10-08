def numPrimo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):  
        if n % i == 0:
            return False
    return True

def primosNoIntervalo(inicio, fim):
    primos = [i for i in range(inicio, fim + 1) if numPrimo(i)]
    return primos


inicio = int(input("Digite o número inicial do intervalo: "))
fim = int(input("Digite o número final do intervalo: "))

primos = primosNoIntervalo(inicio, fim)
print(f"Números primos entre {inicio} e {fim}: {primos}")