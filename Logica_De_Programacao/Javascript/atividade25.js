function SubstituicaoVogal(){
    let vogal = [ "a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
    
    for(let i = 0; i < vogal.length; i++){         
        vogal[i] = "*";
    }

    console.log(vogal)
}

(SubstituicaoVogal())