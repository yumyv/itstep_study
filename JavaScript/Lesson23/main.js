/*let str = "dsfrefe ewwe  w127.000.0.211 eweew ed we ew 152.1.1.333ewee wedewewew 152.0.1.5444r34";
let regExp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
let arr = [];

let x;
while ((x = regExp.exec(str))!=null) {
    arr.push(x[0]);
}

console.log(arr);

let str1 = "dsfrefe ewwe  w+380634478965+38011545454574745 eweew ed we ew 80634478965ewee wedewewew 0634478965r34";
let regExp1 = /(\+380|380|80|0)\d{9}/g;
let arr1 = [];

let y;
while ((y = regExp1.exec(str1))!=null) {
    arr1.push(y[0]);
}

console.log(arr1);

*/
/*error*//*
let str2 = "dsfrefe ewwe  w+380634478965+38011545454574745 eweew ed we ew 80634478965ewee wedewewew 0634478965r34";
let regExp2 = /(\+380|380|80|0)\d{9}/g;
var arr2 = [];

let z;
while ((z = regExp2.exec(str2))!=null) {
    arr2.push(z[0]);
}


for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length > 9) {
        let s = arr2[i];
        s.slice(arr2[i].length,4);
        arr2.push(arr2[i]);
    }
    console.log(arr2)
}
*/

let str2 = "dsfrefe ewwe  w+380634478965+38011545454574745 eweew ed we ew 80634478965ewee wedewewew 0634478965r34";
let regExp2 = /(\+380|380|80|0)(\d{9})/g;
let arr2 = [];

let z;
while ((z = regExp2.exec(str2))!=null) {
    arr2.push(z[0]);
}

console.log(arr2);

