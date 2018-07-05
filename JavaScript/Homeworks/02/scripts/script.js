//task 0

var answerCount = 0;

var userAnswer = parseInt(prompt("Enter the number where '1' is '5', '2' is '8', '3' is '-2'. 2+3=?"));
if (userAnswer == 1) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '20', '2' is '5', '3' is '11'. 8+3=?"));
if (userAnswer == 3) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '12', '2' is '-13', '3' is '9'. 20-8=?"));
if (userAnswer == 1) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '51', '2' is '62', '3' is '45'. 40+5=?"));
if (userAnswer == 3) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '76', '2' is '88', '3' is '-25'. 79+9=?"));
if (userAnswer == 2) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '50', '2' is '62', '3' is '33'. 79-17=?"));
if (userAnswer == 2) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '23', '2' is '54', '3' is '71'. 80-9=?"));
if (userAnswer == 3) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '64', '2' is '24', '3' is '38'. 27+11=?"));
if (userAnswer == 3) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '9', '2' is '15', '3' is '12'. 3*3=?"));
if (userAnswer == 1) answerCount++

var userAnswer = parseInt(prompt("Enter the number where '1' is '79', '2' is '44', '3' is '16'. 88/2=?"));
if (userAnswer == 2) answerCount++

answerCount *= 1.2;
alert("Your mark is " + parseInt(answerCount));

//task 1

var volumeTank = parseFloat(prompt("Enter the volume of the tank in liters"));
var amountFuel = parseFloat(prompt("Enter the amount of fuel in the tank in liters"));
var weightGoods = parseFloat(prompt("Enter the weight of the goods in tons"));
var acDistance = parseFloat(prompt("Enter the distance from A to C in kilometers"));
var cbDistance = parseFloat(prompt("Enter the distance from C to B in kilometers"));

var totalDistance = acDistance + cbDistance;

if (volumeTank < amountFuel) alert("Invalid input");
else {
    if (weightGoods < 1) var FUELCONSUMPTION = 0.25;
    else if (weightGoods < 2) var FUELCONSUMPTION = 0.3;
    else if (weightGoods < 3) var FUELCONSUMPTION = 0.35;
    else if (weightGoods < 4) var FUELCONSUMPTION = 0.42;
    else if (weightGoods < 5) var FUELCONSUMPTION = 0.5;
    else alert("Too heavy baggage");

    if (FUELCONSUMPTION) {
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) alert("Too little fuel");
            else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else alert("Fuel tank too small");
            }
        } else alert("You will reach the point B without stops at point C");
    }
}

//task 2

var toaster = parseInt(prompt("есть ли у вас тостер? 1 - yes, 2 - no"));
var bread = parseInt(prompt("есть ли у вас хлеб? 1 - yes, 2 - no"));

if (toaster===1) {
    if  (bread === 1) {
        alert("1 - нарезать хлеб, 2 - положить хлеб в тостер, 3 - включить тостер, 4 - подождать 5 минут, 5 - тосты готовы");
    } else {
        var breadMoney = parseInt(prompt("есть ли у вас деньги на хлеб? 1 - yes, 2 - no"));
        if (breadMoney === 1) {
            alert("1 - сходить за хлебом, 2 - нарезать хлеб, 3 - положить хлеб в тостер, 4 - включить тостер, 5 - подождать 5 минут, 6 - тосты готовы");
        } else alert("Тостов не будет (((");
    }
} else {
    var toasterMoney = parseInt(prompt("есть ли у вас деньги на тостер? 1 - yes, 2 - no"));
    if (toasterMoney === 1) {
        if (bread === 1) {
            alert("1 - сходить за тостером, 2 - нарезать хлеб, 3 - положить хлеб в тостер, 4 - включить тостер, 5 - подождать 5 минут, 6 - тосты готовы");
        } else {
            var breadMoney = parseInt(prompt("есть ли у вас деньги на хлеб? 1 - yes, 2 - no"));
            if (breadMoney === 1) {
                alert("1 - сходить за тостером, 2 - сходить за хлебом, 3 - нарезать хлеб, 4 - положить хлеб в тостер, 5 - включить тостер, 6 - подождать 5 минут, 7 - тосты готовы");
            } else alert("Тостов не будет (((");
        }
    } else alert("Тостов не будет (((");
}