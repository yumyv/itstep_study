function showArray(a) {
    document.write("<ul>");
    a.forEach((e, i) => document.write("<li><h1>" + i + "->" + e + "</h1></li>"));
    document.write("</ul>");
}

//task 1
/*
var arr = [2, 7, 4, 2, -3, 1];

var min = 0;
var max = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
    if (arr[i] > arr[max]) max = i;
}

var buf = arr[min];
arr[min] = arr[max];
arr[max] = buf;

showArray(arr);
*/
//task 2

var arr = [2, 7, 4, 2, -3, 1,4];

//showArray(arr);

var buf = 0;
var x = arr.length;

for (var i = 0; i < (arr.length/2); i++) {
    buf=arr[i];
    --x;
    arr[i] = arr[x];
    arr[x] = buf;

}

showArray(arr);
