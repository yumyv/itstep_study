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
/*
var arr = [2, 7, 4, 2, -3, 1, 4];

var buf = 0;
var x = arr.length;

for (var i = 0; i < (arr.length / 2); i++) {
    buf = arr[i];
    --x;
    arr[i] = arr[x];
    arr[x] = buf;
}

showArray(arr);
*/

//task 3
/*
let links = ["https://www.google.com", "https://www.facebook.com", "http://vk.com"];
let names = ["google", "facebook", "vkontakte"];

for (let i = 0; i < links.length; i++) {
    document.write(links[i] + " - " + names[i] + "<br>");
}
*/

//task 4
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
let arr = [2, 4, 3, 1, 9, 7];

for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
    }
    let buf = arr[i];
    arr[i] = arr[min];
    arr[min] = buf;
}

showArray(arr);
