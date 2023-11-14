let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n');
N[0] = parseInt(N[0]);
let X = N[1].split(' ').map(Number);
let oMenor = X[0], posicao = 1;

for(let i = 1; i <= N[0]; i++){
    if(X[i] < oMenor){
        oMenor = X[i];
        posicao = i;
    }
}
console.log(`Menor valor: ${oMenor}`);
console.log(`Posicao: ${posicao}`);