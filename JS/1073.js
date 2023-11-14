let N = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
for(let i = 1; i <= N; i++){
    if(i % 2 == 0){
        console.log(`${i}^2 = ${i * i}`);
    }
}