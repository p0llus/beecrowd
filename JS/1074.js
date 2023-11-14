let N = require('fs').readFileSync('/My Drive/CODE/beecrowd/JS/stdin', 'utf8').split("\n");
for(let i = 1; i <= N[0]; i++){
    if(N[i] == 0){
        console.log("NULL");
    }else{
        let text = [];
        if(N[i] % 2 == 0){
            text = "EVEN";
        }else{
            text = "ODD";
        }
        if(N[i] > 0){
            text += " POSITIVE";
        }else if(N[i] < 0){
            text += " NEGATIVE";
        }
        console.log(text);
    }
}