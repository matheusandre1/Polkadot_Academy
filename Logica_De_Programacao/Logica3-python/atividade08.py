n = int(input())

fibo = []
if n > 0:
    fibo.append(0)
if n > 1:
    fibo.append(1)

    for i in range(2, n):
        fibo.append(fibo[i-1] + fibo[i-2])

print(fibo)