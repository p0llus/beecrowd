let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split('\n');
let perRatos = 0, perSapos = 0, perCoelhos = 0, totalRatos = 0, totalSapos = 0, totalCoelhos = 0, totalCobaias = 0;
for(let i = 1; i <= parseInt(N[0]); i++){
    let cobaias = N[i].split(' ');
    let numCobaias = parseInt(cobaias[0]);
    let animal = cobaias[1];
    totalCobaias += numCobaias;
    if(animal[0] == "C"){totalCoelhos = totalCoelhos + numCobaias;}
    if(animal[0] == "R"){totalRatos = totalRatos + numCobaias;}
    if(animal[0] == "S"){totalSapos = totalSapos + numCobaias;}
}
perCoelhos = (totalCoelhos * 100) / totalCobaias;
perRatos = (totalRatos * 100) / totalCobaias;
perSapos = (totalSapos * 100) / totalCobaias;
console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${perCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${perRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${perSapos.toFixed(2)} %`);