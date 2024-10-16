function VerificarSeTemONumeroNalista(numero, lista){
    for(let i = 0; i < lista.length; i++){
        if (numero === lista[i]){
            console.log("Tem o numero na lista");
            break;
        }
        else{
            console.log("Não tem o numero na lista")
        }
    }
}


lista = [1,2,3,4,5,6,7,8,9,10];
numero = 11;

VerificarSeTemONumeroNalista(numero,lista)