vogal = ["a", "e", "i", "o", "u"];
let frase = "Palavra";
let contagem = 0;
for(let i = 0; i < frase.length; i++){
    for(let j= 0; j < vogal.length; i++){
        if (frase[i] === vogal[j]){
          console.log(contagem += 1)
        }
    }
}