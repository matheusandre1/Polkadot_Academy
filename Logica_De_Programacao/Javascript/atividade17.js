function OrdenarLista(lista){   
    
    let ordernar = lista.sort(comparar);
    return ordernar;
}

function comparar(a,b){
    if ( a < b){
        return -1;
    }       
    if (a > b){
        return 1;
    }

    return 0;
} 

lista = [10,1,2,3,4,5,6,7,8,9]

console.log(OrdenarLista(lista));
