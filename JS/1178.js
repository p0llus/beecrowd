let X = parseFloat(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
console.log(`N[0] = ${X.toFixed(4)}`);
for(let i = 1; i <= 99; i++){
    X /= 2;
    console.log(`N[${i}] = ${(X).toFixed(4)}`);
}