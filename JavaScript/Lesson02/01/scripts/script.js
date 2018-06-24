/*var userA = parseFloat(prompt("Enter number a"));
var userB = parseFloat(prompt("Enter number b"));
var userC = parseFloat(prompt("Enter number c"));

var discriminant = userB*userB - (4*userA*userC);

if (discriminant < 0) {
    alert("Discriminant < 0 , no results");
}
else if (discriminant == 0) {
    var numberX = -userB/(2*userA);
    alert("Result x= " + numberX);
}
else {
    var numberX1 = (-userB+Math.sqrt(discriminant))/2*userA;
    var numberX2 = (-userB-Math.sqrt(discriminant))/2*userA;
    alert("Result x1=" + numberX1 + ", x2=" + numberX2);
}*/
/*
var n = parseInt(prompt("Enter all the places: "));
var m = parseInt(prompt("Enter the seats"));
var x = parseInt(prompt("Enter the number of passengers"));

if (x <= n) {
    if(x >= m) {
        alert("Seats: " + m + " standing places: " + (x - m) )
    }
    else {
        alert("Seats: " + x + " no standing places");
    }
}
else {
    alert("bus full no places available");
}*/
/*
var n = parseInt(prompt("Enter all the places: "));
var m = parseInt(prompt("Enter the seats"));
var x = parseInt(prompt("Enter the number of passengers"));

if (x <= n && x >= m) {
    alert("Free places: " + (n - x) + " no seats");
} else if (x <= n && x < m) {
    alert("Free places: " + (n - x) + " and seats " + (m -x));
}
else {
    alert("bus full no places available");
}*/

/*
var n = parseInt(prompt("Enter all the places: "));
var m = parseInt(prompt("Enter the seats"));
var x = parseInt(prompt("Enter the number of passengers"));

if (x <= n) {
    alert("Free places: " + (n - x) + " seats: " + );
} else if (x <= n && x < m) {
    alert("Free places: " + (n - x) + " and seats " + (m -x));
}
else {
    alert("bus full no places available");
}*/


var userYear = parseInt(prompt("Enter the year: "));
var userMonth = parseInt(prompt("Enter the number of month"));
var userDay = parseInt(prompt("Enter the day"));

var a = parseInt((14 - userMonth) / 12);
var y = userYear - a;
var m = userMonth + 12 * a - 2;

var weekDay = (userDay + y + parseInt(y / 4) - parseInt(y / 100) + parseInt(y / 400) + parseInt((31 * m) / 12))%7;

if (weekDay == 0) {
    alert("Sunday");
}else if (weekDay == 1) {
    alert("Monday");
}else if (weekDay == 2) {
    alert("Tuesday");
}else if (weekDay == 3) {
    alert("Wednesday");
}else if (weekDay == 4) {
    alert("Thursday");
}else if (weekDay == 5) {
    alert("Friday");
}else {
    alert("Saturday");
}























