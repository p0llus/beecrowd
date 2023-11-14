let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n").map(Number);
let oMaior = N[0], posicao = 1;
for(let i = 1; i <= 99; i++){
    if(N[i] > oMaior){
        oMaior = N[i];
        posicao = i + 1;
    }
}
console.log(oMaior);
console.log(posicao);