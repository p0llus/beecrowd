let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n').map(Number);
let par = [], impar = [];
let qtdPar = 0, qtdImpar = 0;
for(let i = 0; i <= 14; i++){
    if(valores[i] % 2 == 0){
        par[qtdPar] = valores[i];
        qtdPar++;
        if(qtdPar == 5){
            for(let j = 0; j < 5; j++){
                console.log(`par[${j}] = ${par[j]}`);
            }
            qtdPar = 0;
        }
    }else{
        impar[qtdImpar] = valores[i];
        qtdImpar++;
        if(qtdImpar == 5){
            for(let j = 0; j < 5; j++){
                console.log(`impar[${j}] = ${impar[j]}`);
            }
            qtdImpar = 0;
        }
    }
}
for(let j = 0; j < qtdImpar; j++){ // menor que qtdImpar
    console.log(`impar[${j}] = ${impar[j]}`);
}
for(let j = 0; j < qtdPar; j++){ // menor que qtdPar
    console.log(`par[${j}] = ${par[j]}`);
}