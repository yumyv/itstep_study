//sorting by choice
/*
var arr = [3,4,2,8,6,1,7];

for (var i = 0; i < arr.length-1; i++) {
    var min = i;
    for (var j = i; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
    }
    var buf = arr[i];
    arr[i] = arr[min];
    arr[min] = buf;
}
console.log(arr);
*/
//bubble sorting
/*
var arr = [3, 4, 2, 8, 6, 1, 7];
var j = 0;
do {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var buf = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = buf;
        }
    }
    j++;
} while (j < arr.length);

console.log(arr);
*/
//bubble sorting optimization
/*
var arr = [3, 4, 2, 8, 6, 1, 7];
do {
    var change = false;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var buf = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = buf;
            change = true;
        }
    }
} while (change);

console.log(arr);
*/

// insertion sorting

























