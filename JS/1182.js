let L = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n');
let [aColuna, T] = L.splice(0, 2);
let aux = 0, somaColuna = 0;
let matriz = [[],[],[],[],[],[],[],[],[],[],[],[]];
for(let i = 0; i < 12; i++){
    for(let j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(L[aux]);
        aux++;
    }
}
for(let i = 0; i < 12; i++){
    somaColuna += matriz[i][parseInt(aColuna)];
}
if(T[0] == 'S'){
    console.log(somaColuna.toFixed(1));
}
if(T[0] == 'M'){
    console.log((somaColuna/12).toFixed(1));
}