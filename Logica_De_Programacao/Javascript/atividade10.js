function ContagemVogal(frase){
    vogal = [ "a", "e", "i", "o", "u"];
    contagemVogal = 0

    for(let i =0; i < frase.length; i++){
        for(let j =0; j < vogal.length; j++){
            if(frase[i] === vogal[j]){
                contagemVogal += 1;
            }        
        }
    }

    console.log(contagemVogal)

}

let frase = "Palavra";

ContagemVogal(frase);