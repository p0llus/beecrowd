let N = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
console.log(`N[0] = ${N}`);
for(let i = 1; i <= 9; i++){
    N *= 2;
    console.log(`N[${i}] = ${N}`);
}