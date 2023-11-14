let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n').map(Number);
let j = 0;
for(let i = 19; i >= 0; i--){
    console.log(`N[${j}] = ${N[i]}`);
    j++;
}