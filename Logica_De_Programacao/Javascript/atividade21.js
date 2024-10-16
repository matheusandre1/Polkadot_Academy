function Multiplos(num1, num2){

    if (num1 % num2 === 0){
        return true;
    }
    else{
        return false;
    }
}

num1 = 7;
num2 = 5;

console.log(Multiplos(num1,num2));