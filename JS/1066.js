let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
let qtdPos = 0, qtdNeg = 0, qtdPar = 0, qtdImp = 0;
for(let i = 0; i <= 4; i++){
    if(valores[i] % 2 == 0){
        qtdPar++;
    }else{
        qtdImp++;
    }
    if(valores[i] > 0){
        qtdPos++;
    }else if(valores[i] < 0){
        qtdNeg++;
    }
}
console.log(`${qtdPar} valor(es) par(es)`);
console.log(`${qtdImp} valor(es) impar(es)`);
console.log(`${qtdPos} valor(es) positivo(s)`);
console.log(`${qtdNeg} valor(es) negativo(s)`);