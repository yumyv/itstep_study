/*let str = "1,2,3,4,5,6,7,8,9";

let arr = str.split(",");
arr = arr.join("");

console.log(arr);
*/
/*
let arr = [1, 3, 5, 4, 3, 8, 6, 3];
let res = [];
//example1
for (let i = -1; (i = arr.indexOf(3, i + 1)) !== -1;){
    res.push(i);
}
console.log(res);
//example2
let index = arr.indexOf(3);
while (index!==-1) {
    res.push(index);
    index = arr.indexOf(3, index+1);
}
console.log(res);
*/

let arr = [1, 3, 5, 4, 3, 8, 6, 3];

for (let i = 0; i < arr.length-1; i++) {
    if (arr[i]%2===0) {
        arr.splice(i,1);
        i--;
    }
}

console.log(arr);

