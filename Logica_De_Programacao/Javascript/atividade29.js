function VerificaOrdem(lista){

    for(let i = 0; i < lista.length - 1; i++){
        if( lista[i] > lista[i + 1]){
            return false;
        }
    }
    return true;
}

lista = [5,4,3,2,1];

console.log(VerificaOrdem(lista));