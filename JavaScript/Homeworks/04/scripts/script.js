//task 01

var height = parseInt(prompt("Enter the height"));
var n = "&nbsp"
for (let i = 0; i < height; i++) {
    for (let k = height; k > i - 1; k--) {
        document.write(n, n)
    }
    for (let j = 0; j < i + 1; j++) {
        document.write("*", n, n)
    }
    document.write("<br>")
}


var w = 2 * parseInt(prompt("Enter the height"));
var h = (w - (w % 2)) / 2 + (w % 2);
var spaces = w;

for (i = h; i > 0; i--) {
    var str = "";
    for (j = i; j <= w; j++) {
        if (i === 1) {
            str += "*";
        } else if (j === w || j === spaces) {
            str += "*";
        } else {
            str += "&nbsp&nbsp";
        }
    }
    spaces -= 2;
    document.write(str + "<br/>");
}


//task 02

let answer = parseInt(Math.random() * 100);
let attempt = 1;
let attemptsCount = 5;

while (attempt <= attemptsCount) {
    let userAnswer = prompt("Enter the number from 0 to 100 \nYou have " + attemptsCount + " attempts \nFor exit enter 'q'" + "\nAttempt № " + attempt);
    if (userAnswer === "q" || userAnswer === "Q") break;
    else if (userAnswer > answer) alert("Your answer is too large. You have " + (attemptsCount - attempt) + " attempts");
    else if (userAnswer < answer) alert("Your answer is too small. You have " + (attemptsCount - attempt) + " attempts");
    else if (userAnswer == answer) {
        let result = confirm("You won! Do you wanna play again?");
        if (result) break;
    }
    else alert("Enter the number!");
    attempt++;
}
if (attempt > attemptsCount) alert("You did not guess, it was a number: " + answer);
