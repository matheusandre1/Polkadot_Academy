function MediaLista(n){
    soma = 0
    media = 0
    for(let i = 0; i < n.length; i++){
        soma += n[i];
    }

    media = soma / n.length
    return media
}

let lista = [10,10,10,10,8,9,8];

console.log(MediaLista(lista));

