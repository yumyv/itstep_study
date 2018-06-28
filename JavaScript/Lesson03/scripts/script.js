/*
var i = 0;
while (i < 100) {
    console.log(i + ((i++ % 2) ? " Нечетное" : " Четное"));
}
*/

/*
var i = 100;
while (i > 0) {
    console.log(i + ((i-- % 2) ? " Нечетное" : " Четное"));
}
*/

/*
var i = 1;
var multi = 1;
while (i <= 10) {
    multi *= i;
    i++;
}
alert(multi);
*/

/*
var i = 0;
var multi = 0;
while (i < 100) {
    if (i % 2 === 0){
        multi += i;
    }
    i++;
}
alert(multi);
*/

/*
var i = 0;
var multi = 0;
while (i <= 100) {
    i % 2 ? "" : multi += i;
    i++;
}
alert(multi);
*/


var userNumber = parseInt(prompt("Enter the number: "));
var i = 1;

while (i <= 10) {
    alert(userNumber + " * " + i + " = " + (userNumber * i));
    i++;
}























