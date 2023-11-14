let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n');
let O = valores.splice(0, 1);
let aux = 0, soma = 0;
let matriz = [[],[],[],[],[],[],[],[],[],[],[],[]];
for(let i = 0; i < 12; i++){
    for(let j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(valores[aux]);
        aux++;
    }
}
aux = 1;
for(let i = 0 ; i < 12; i++){
    for(let j = aux ; j < 12; j++){
        soma += matriz[i][j];
    }
}
if(O[0] == "S"){
    console.log(soma.toFixed(1));
}
if(O[0] == "M"){
    console.log((soma/66).toFixed(1));
}