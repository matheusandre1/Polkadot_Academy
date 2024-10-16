function Multiplicacao(lista){
    let multiplicacaoTotal = 1;
    for(let i = 0; i < lista.length; i++){
        multiplicacaoTotal *= lista[i];
    }

   console.log(`A Multiplicação total é ${multiplicacaoTotal}`);

}

lista = [1,2,3,4,5,6,7,8,9,10]

Multiplicacao(lista)