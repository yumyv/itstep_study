//1
function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
//2
function lowerValue(a, b) {
    if (a < b) return a;
    else return b;
}
//3
function lowerValueArray(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (lowerValue(arr[i],arr[i+1]) < result) result = lowerValue(arr[i],arr[i+1]);
    }
    return result;
}

let arr = [-2,2,3,4,1,5,6];

console.log(lowerValueArray(arr));