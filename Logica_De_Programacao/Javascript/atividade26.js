function Contem(str,substring){


    if (str.includes(substring)){
        return true
    }
    else{
        return false;
    }   
}

let frase = "boi";
let sub = "ichbsicbaiscbaiboi";

console.log(Contem(frase,sub));