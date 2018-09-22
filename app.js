'use strict';

// F0 = 0
// F1 = 1
// Fn+2 = fn + fn+1(n >= 0)

function fib(n){
    if(n < 0){
        return 0;
    } else if(n === 1){
        return n;
    }
    
    return fib(n - 2) + fib(n - 1);
}

const length = 40;
for(let i = 0;i <= length;i++){
    console.log(fib(i));
}