let L = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n');
// let [aLinha, T] = L.splice(0, 2);
// let aux = 0, somaLinha = 0;
// let matriz = [[],[],[],[],[],[],[],[],[],[],[],[]];
// for(let i = 0; i < 12; i++){
//     for(let j = 0; j < 12; j++){
//         matriz[i][j] = parseFloat(L[aux]);
//         aux++;
//     }
// }

let matriz = [];
let vetor = [];
for(let i = 0; i < 12; i++){
    for(let j = 0; j < 12; j++){
        vetor[j] = parseFloat(L.splice(0, 1));
        if(j == 11){ 
            matriz[i] = vetor;
            console.log(vetor);
        }
    }
}

// for(let i = 0; i < 12; i++){
//     somaLinha += matriz[parseInt(aLinha)][i];
// }
// if(T[0] == 'S'){
//     console.log(somaLinha.toFixed(1));
// }
// if(T[0] == 'M'){
//     console.log((somaLinha/12).toFixed(1));
// }