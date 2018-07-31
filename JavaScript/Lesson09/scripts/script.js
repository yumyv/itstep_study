//average value from array

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

function averageValue(arr) {
    let averageArrayValue = arraySum(arr) / arr.length;
    return averageArrayValue;
}

//power

function pow(number, power) {
    let pow = 1;
    for (let i = 0; i < power; i++) pow *= number;
    return pow;
}

//array power for each element

function arrayPower(arr, power) {
    let arrayPower = [];
    for (let i = 0; i < arr.length; i++) arrayPower.push(pow(arr[i], power));
    return arrayPower;
}

//difference

function arrayContain(arr, number) {
    for (let i = 0; i < arr.length; i++) if (arr[i] === number) return true;
    return false;
}

function diffArrayElem(arr1, arr2) {
    let result = [];
    for (let i in arr1) if (!arrayContain(arr2, arr1[i])) result.push(arr1[i]);
    return result;
}

/*
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 6, 8, 10];

console.log(diffArrayElem(arr1, arr2));
*/

//find smaller element

function smallerArrElem(arr, start, end) {
    for (let i = start; i < end; i++) {
        var min = i;
        for (let j = i; j < end; j++) if (arr[j] < arr[min]) min = j;
    }
    return min;
}

let arr = [1, 5, 3, 5, 9, 4, 8, 0, 3];

console.log(smallerArrElem(arr,0,8));



