function NumeroDivisivel(numero){

    listDivisel = [];
    listaNãoDivisel = [];
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
           listDivisel.push(i);
        } 
    }
    console.log(`Divisiveis ${listDivisel}`) 
}

let numero = 10;
NumeroDivisivel(numero);