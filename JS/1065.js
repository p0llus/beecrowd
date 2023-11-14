let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
let qtdPar = 0;
for(let i = 0; i <= 4; i++){
    if(valores[i] % 2 == 0){
        qtdPar++;
    }    
}
console.log(`${qtdPar} valores pares`);