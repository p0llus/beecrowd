let X = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
for(let i = 1; i <= X; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}