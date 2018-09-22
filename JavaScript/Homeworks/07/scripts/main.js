function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i)) {
            return true;
        }
    }
    return false;
}

console.log(some([0, 1, 2, 3], (a => a % 2 === 0)));


function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i], i)) {
            return false;
        }
    }
    return true;
}

console.log(every([0, 1, 2, 3], (a => a % 2 === 0)));


function reduce(arr, f, startValue) {
    let result = startValue;
    for (let i = 0; i < arr.length; i++) {
        result = f(result, arr[i], i);
    }
    return result;
}

console.log(reduce([0, 1, 2, 3], ((a, b) => a + b), 0));
