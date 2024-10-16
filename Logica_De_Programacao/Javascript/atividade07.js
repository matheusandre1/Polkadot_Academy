function EhPrimo(numero){
    if (numero >1 && (numero % 1 === 0) && numero % numero === 0){
        console.log("Numero Primo")
    }
    else{
        console.log("Não é Primo")
    }
}

EhPrimo(7);