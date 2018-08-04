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
        let value = lowerValue(arr[i], arr[i + 1]);
        if (value < result) result = value;
    }
    return result;
}

//4
function lowerIndexArr(arr, from, to) {
    let result = arr[from];
    for (let i = from; i < to; i++) {
        let value = lowerValue(arr[i], arr[i + 1]);
        if (value < result) result = value;
    }
    return arr.indexOf(result);
}

//5
function sortLowerValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let value = lowerValue(arr[i], arr[j]);
            if (value < arr[i]) {
                let temp = arr[i];
                arr[i] = value;
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//6
function sumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) sum += arr[i];
    }
    return sum;
}

//7
function indexOf(arr, n) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            result = i;
            break;
        }
    }
    return result;
}