//task 01

//task 02

let answer = parseInt(Math.random() * 100);
let attempt = 1;
let attemptsCount = 5;

while (attempt <= attemptsCount) {
    let userAnswer = prompt("Enter the number from 0 to 100 \nYou have " + attemptsCount + " attempts \nFor exit enter 'q'" + "\nAttempt № " + attempt);
    if (userAnswer === "q" || userAnswer === "Q") break;
    else if (userAnswer > answer) alert("Your answer is too large. You have " + (attemptsCount - attempt) + " attempts");
    else if (userAnswer < answer) alert("Your answer is too small. You have " + (attemptsCount - attempt) + " attempts");
    else if (userAnswer === answer) {
        let result = confirm("You won! Do you wanna play again?");
        if (result) break;
    }
    else alert("Enter the number!");
    attempt++;
}
if (attempt > attemptsCount) alert("You did not guess, it was a number: " + answer);
