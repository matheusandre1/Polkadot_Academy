function Fatorial(n){
    resultado = 1
    for(let i = n; i > 1; i--){
        resultado *= i
    }

    return resultado;
}

console.log(Fatorial(5))