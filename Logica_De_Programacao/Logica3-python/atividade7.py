somatotalnota = 0
quantidadeDenota = 0
nota = 0

while (nota != -1):
   nota = int(input())
   if nota != -1:
    somatotalnota += nota
    quantidadeDenota += 1

if quantidadeDenota > 0:

 media = somatotalnota / quantidadeDenota
print(media)