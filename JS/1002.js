var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines);
let A = ((raio * raio) * 3.14159);
console.log(`A=${A.toFixed(4)}`);