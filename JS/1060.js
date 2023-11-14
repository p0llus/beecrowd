let valores = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
let pos = 0;
for(let i = 0; i <= 5; i++){
    if(valores[i] > 0){
        pos++;
    }
}
console.log(`${pos} valores positivos`);