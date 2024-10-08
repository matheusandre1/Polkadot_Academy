compras = ["Sapato", "Tenis","Boné", "Chapeu"]

n = input("Digite o nome do produto pra ser adicionado: ")
o = input("Digite o nome do produto pra ser adicionado: ")

compras.append(n)
compras.append(o)

for i in compras:
  print(i)
