 function Inversao(n){
    
    let separar = n.split("")

    let reverter = separar.reverse()
    
    return reverter.join("")
 }

 let frase = "Palavra";

console.log(Inversao(frase))