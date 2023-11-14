var input = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8');
var lines = input.split(" ");

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
pi = 3.14159;
let areaTri = ((A * C) / 2);
let areaCir = (pi * (C * C));
let areaTra = (((A + B) * C) / 2);
let areaQua = (B * B);
let areaRet = (A * B);
console.log(`TRIANGULO: ${areaTri.toFixed(3)}`);
console.log(`CIRCULO: ${areaCir.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTra.toFixed(3)}`);
console.log(`QUADRADO: ${areaQua.toFixed(3)}`);
console.log(`RETANGULO: ${areaRet.toFixed(3)}`);