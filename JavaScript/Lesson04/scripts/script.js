//Need to look again
/*var width = parseInt(prompt("Enter the width of the rect"));
var height = parseInt(prompt("Enter the height of the rect"));

var starHeight = 0;

while (starHeight < height) {
    var starWidh =0;
    while (starWidh < width) {
        document.write("*");
        starWidh++;
    }
    document.write("<br>");
    starHeight++;
}
*/
//

//Need to look again
/*
var height = parseInt(prompt("Enter the height of the triangle"));

var starHeight = 0;

while (starHeight < height) {
    var i = 0;
    while (i <= starHeight) {
        document.write("*");
        i++;
    }
    document.write("<br>");
    starHeight++;
}
*/
/*
var width = parseInt(prompt("Enter the width of the rect"));
var height = parseInt(prompt("Enter the height of the rect"));

var starHeight = 0;

while (starHeight < height) {
    var starWidh =0;
    while (starWidh < width) {
        if (starHeight==0||starHeight==height-1||starWidh==0||starWidh==width-1)
            document.write("*");
        else document.write("&nbsp;&nbsp;");
        starWidh++;
    }
    document.write("<br>");
    starHeight++;
}
*/

/*
var height = parseInt(prompt("Enter the height of the triangle"));

var starHeight = 0;

while (starHeight < height) {
    var i = 0;
    while (i <= starHeight) {
        if (starHeight==height-1||i==0||i==starHeight)
            document.write("* ");
        else document.write("&nbsp;&nbsp; ");
        i++;
    }
    document.write("<br>");
    starHeight++;
}*/

function rand(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

while (true) {
    var x = rand(1,50);
    if (x==7) continue;
    if (x==4) break;
    if (x==10) {
        document.write("100<br>");
        continue;
    }
    document.write(x+"<br>");
}