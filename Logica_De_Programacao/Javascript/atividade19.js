function CelsiusforFahrenheit(temperatura){
    let conversao = (temperatura * (9/5)) + 32;

    return conversao;
}

let temperatura = 50;

console.log(CelsiusforFahrenheit(temperatura));