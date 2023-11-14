let N = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
for(i = 1; i <= 10; i++){
    console.log(`${i} x ${N} = ${i * N}`);
}