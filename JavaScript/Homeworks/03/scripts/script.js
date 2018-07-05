//Task 0

var i = 1;
while (i<=100) {
    if (i%3!==0)document.write(i+"<br>");
    i++;
}

//Task 1

var x = parseInt(prompt("Enter the number"));

var i = 1;
var j = 0;
while (i <= 100) {
    if (i%x===0) j++;
    i++;
}
document.write("<br>" + "Number of numbers that are divisible by 'x': " + j + "<br>");

//task 2

var a = parseInt(prompt("Enter a (from)"));
var b = parseInt(prompt("Enter b (to)"));
var c = parseInt(prompt("Enter c (step)"));

var x = a;

while (x>=a && x<b) document.write("<br>" + ((x+=c)-c) + "<br>"); 

//task 3 

for (var i = 1; i <=10; i++) {
    for (var j = 1; j <=10; j++) {
        document.write(i*j);
    }
    document.write("<br>");
}
