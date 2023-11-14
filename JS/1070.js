let X = parseInt(require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8'));
let qtdImp = 0;
for(let i = X; true; i++){
    if(i % 2 != 0){
        console.log(i);
        qtdImp++;
    }
    if(qtdImp == 6){break;}
}