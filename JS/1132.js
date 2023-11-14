let [X, Y] = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n").map(Number);
if(X > Y){
    let aux = X;
    X = Y;
    Y = aux;
}
let somaDosMultiplos = 0;
for(i = X; i <= Y; i++){
    if(i % 13 != 0){
        somaDosMultiplos += i;
    }
}
console.log(somaDosMultiplos);