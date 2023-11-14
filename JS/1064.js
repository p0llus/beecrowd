let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
let qtdPos = 0;
let somaPos = 0;
for(let i = 0; i <= 5; i++){
    if(valores[i] > 0){
        qtdPos++;
        somaPos += parseFloat(valores[i]);
    }    
}
console.log(`${qtdPos} valores positivos`);
console.log((somaPos / qtdPos).toFixed(1));