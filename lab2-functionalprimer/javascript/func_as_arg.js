//Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(a, b){
    let arr = [];
    for (let i = a; i<=b; i++) {
        arr.push(i);
    }
    return arr;    
}

function applicatorFunc(arrFunc, a, b, s){
    if(s=='s'){
        const arr = arrFunc(a, b);        
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
    else{        
        const arr = arrFunc(a, b);
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum/(b -a +1);
    }
}

let x = applicatorFunc(arrFunc, 1, 5, 's');
console.log(x);