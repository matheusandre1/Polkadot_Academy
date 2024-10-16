function Fibo(num){
  fibo = {};

  if (num > 0 || num > 1){
    fibo.push(num)
  }

  for( let i = 2; i < n; i++){
    fibo.push(fibo[i -1] + fibo[i -2])
  }

  return fibo;
}

console.log(Fibo(5))