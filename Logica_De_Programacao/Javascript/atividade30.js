function ContaImpar(lista){
     let contagem = 0;

     for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 != 0){
            contagem++
        }
     }

     return contagem;
}

lista = [1,5,3,4,10,11]
console.log(ContaImpar(lista))