//Task 0
/*
document.write("<h2>Task 0</h2>");
var i = 1;
while (i <= 100) {
    if (i % 3 !== 0) document.write(i + "<br>");
    i++;
}

//Task 1

document.write("<h2>Task 1</h2>");
var x = parseInt(prompt("Enter the number"));

var i = 1;
var j = 0;
while (i <= 100) {
    if (i % x === 0) j++;
    i++;
}
document.write("Number of numbers that are divisible by 'x': " + j + "<br>");

//task 2

document.write("<h2>Task 2</h2>");
var a = parseInt(prompt("Enter a (from)"));
var b = parseInt(prompt("Enter b (to)"));
var c = parseInt(prompt("Enter c (step)"));

var x = a;

while (x >= a && x < b) document.write(((x += c) - c) + "<br>");

//task 3

document.write("<h2>Task 3</h2>");
for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= 10; j++) {
        document.write(i + "*" + j + "=" + (i * j) + "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    document.write("<br>" + "<br>");
}

//task 4

document.write("<h2>Task 4</h2>");
var userWord = prompt("Enter the word: ");
var userString = parseInt(prompt("Enter the number of strings: "));

var userWordEmpty = "";
for (var i = 0; i <= userString; i++) {
    document.write((userWordEmpty += userWord + "&nbsp;&nbsp;&nbsp;&nbsp;") + "<br>");
}

//task 5

var userNumber = parseInt(prompt("Enter the number"));

*/

var arr = ["Яблоко", "Апельсин", "Груша"];

for (var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}





