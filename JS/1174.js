let A = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n').map(Number);
for(let i = 0; i <= 99; i++){
    if(A[i] <= 10){
        console.log(`A[${i}] = ${A[i].toFixed(1)}`);
    }
}