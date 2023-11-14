let T = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
let j = 0
for(let i = 0; i <= 999; i++){
    console.log(`N[${i}] = ${j}`);
    j++;
    if(j == T){
        j = 0;
    }
}