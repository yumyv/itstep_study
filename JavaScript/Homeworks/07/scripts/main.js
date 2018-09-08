function reduce(arr,f) {
    var x = f + arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        x += arr[i+1];
    }
    return x;
}

console.log(reduce([1,2,3,4],5));