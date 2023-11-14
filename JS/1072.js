let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
let dentro = 0, fora = 0;
for(i = 1; i <= N[0]; i++){
    if(N[i] >= 10 && N[i] <= 20){
        dentro++;
    }else{
        fora++;
    }
}
console.log(`${dentro} in`);
console.log(`${fora} out`);