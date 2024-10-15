import random
numRandow = random.randint(1, 100)
palpite = int(input("Digite seu palpite (entre 1 e 100): "))

while palpite != numRandow:
    if palpite > numRandow:
        print("O número é menor.")
    else:
        print("O número é maior.")
    
    palpite = int(input("Tente novamente: "))

print("Parabéns! Você acertou.")