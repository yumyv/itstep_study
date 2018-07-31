function printDown(n) {
    console.log(n);
    if (n > 0) printDown(n - 1);
}

function printUp(n) {
    if (n > 0) printDown(n - 1);
    console.log(n);
}


let fact = n => n === 0 ? 1 : n * fact(n - 1);

//console.log(fact(3));


let sum = n => n === 0 ? 0 : n + sum(n > 0 ? n - 1 : n + 1);

//console.log(sum(-3));

//for HW
let sumAB = (a, b) => b >= a ? sumAB(a, b - 1) + b : 0;

//console.log(sumAB(2, 3));

let fib = n => {
    if (n === 1 || n === 2) return 1; //or if(n<=1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));