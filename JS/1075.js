let N = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
for(let i = 1; i <= 10000; i++){
    if(i % N == 2){
        console.log(i);
    }
}