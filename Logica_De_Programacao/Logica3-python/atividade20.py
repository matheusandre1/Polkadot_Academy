
listaNumeros = []
numero = 0

while True:
  entraDeNumeros = (input())
  if entraDeNumeros == "para":
    break

  entraDeNumeros = int(entraDeNumeros)
  listaNumeros.append(entraDeNumeros)

if listaNumeros:
  maior = max(listaNumeros)
  menor = min(listaNumeros)
  media = sum(listaNumeros) / len(listaNumeros)
  print(f"Maior: {maior}")
  print(f"Menor: {menor}")
  print(f"Média: {media}")
