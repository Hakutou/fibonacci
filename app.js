'use strict';

// F0 = 0
// F1 = 1
// Fn+2 = fn + fn+1(n >= 0)

const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    if(n < 0){
        return 0;
    } else if(n === 1){
        return 1;
    }

    const result = fib(n - 2) + fib(n - 1);
    memo.set(n, result);

    return result;
}

const length = 100;
for(let i = 0;i <= length;i++){
    console.log(fib(i));
}