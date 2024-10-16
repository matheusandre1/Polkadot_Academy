function EhPalindromo(frase){
    let fraseSplit = frase.split("")
    let reverse = fraseSplit.reverse()
    let join = reverse.join("")

 if (frase == join){
    console.log("Eh palindromo");
 }
 else{
    console.log("Não é palindromo")
 }
}

let frase = "tenet";

EhPalindromo(frase);