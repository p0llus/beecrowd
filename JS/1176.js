let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n').map(Number);
let fibonacci = [0, 1];
for(let i = 2; i <= 60; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for(let i = 1; i <= valores[0]; i++){
    console.log(`Fib(${valores[i]}) = ${fibonacci[valores[i]]}`);
}