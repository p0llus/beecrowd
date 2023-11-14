let X = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n').map(Number);
for(let i = 0; i <= 9; i++){
    if(X[i] < 1){
        X[i] = 1;
    }
    console.log(`X[${i}] = ${X[i]}`);
}