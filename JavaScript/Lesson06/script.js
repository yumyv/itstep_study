/*
var arr1 = [1, 5, 2, 8, 6, 7];
var arr2 = [5, 3, 4, 8, 9, 4];


for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        var needed = false;
        if (arr1[i] === arr2[j]) {
            needed = true;
            break;
        }
    }
    if (!needed) {
        console.log(arr1[i]);
    }
}
*/

/*
//Binary search number
var arr = [1, 5, 10, 12, 18, 20, 31, 55, 65];
var start = 0;
var end = arr.length - 1;

var x = parseInt(prompt("Enter the number"));

var found = false;

while (start <= end) {
    var center = parseInt((start + end) / 2);

    if (arr[center] === x) {
        found = true;
        break;
    } else if (arr[center] > x) end = center - 1;
    else start = center + 1;
}
if (found) document.write("Yes");
else document.write("No");
*/

//Binary search index
var arr = [1, 5, 10, 12, 18, 20, 31, 55, 65];
var start = 0;
var end = arr.length - 1;

var x = parseInt(prompt("Enter the number"));

var found = false;

while (start <= end) {

    var center = parseInt((start + end) / 2);

    if (arr[center] === x) {
        found = center;
        break;
    } else if (arr[center] > x) end = center - 1;
    else start = center + 1;
}
if (found) alert(center);
else alert("No");