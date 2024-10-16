function SomaNumeroPar(lista){

    soma = 0;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 0){
            soma += lista[i];
        }
    }

    console.log(`Soma Total ${soma}`);
}

lista = [1,2,3,4]

SomaNumeroPar(lista);