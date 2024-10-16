function ContarCaracter(caracter, lista){
    contagemCaracter = 0
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === caracter){
            contagemCaracter += 1;
        }
    }

    console.log(`Esse ${caracter} foi contado ${contagemCaracter}`);
}

lista = ["l", "o", "i", "i", "i", "m", "m"]
let caracter = "i";

ContarCaracter(caracter,lista);