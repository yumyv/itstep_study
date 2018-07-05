var userYear = parseInt(prompt("Enter the year: "));
var userMonth = parseInt(prompt("Enter the number of month"));
var userDay = parseInt(prompt("Enter the day"));

var a = parseInt((14 - userMonth) / 12);
var y = userYear - a;
var m = userMonth + 12 * a - 2;

var weekDay = (userDay + y + parseInt(y / 4) - parseInt(y / 100) + parseInt(y / 400) + parseInt((31 * m) / 12)) % 7;

if (weekDay == 0) {
    alert("Sunday");
} else if (weekDay == 1) {
    alert("Monday");
} else if (weekDay == 2) {
    alert("Tuesday");
} else if (weekDay == 3) {
    alert("Wednesday");
} else if (weekDay == 4) {
    alert("Thursday");
} else if (weekDay == 5) {
    alert("Friday");
} else {
    alert("Saturday");
}























