function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(6));


function fibonacci(first, second, n) {
    if (n === 0 || n === 1) return n;
    else if (n === 2) return first + second;
    else return fibonacci(second, first + second, n - 1)
}

console.log(fibonacci(0, 1, 6));