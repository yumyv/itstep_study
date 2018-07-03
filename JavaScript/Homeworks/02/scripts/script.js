//task 0
/*
var answerCount = 0;

var userAnswer = parseInt(prompt("Enter the number where '1' is '5', '2' is '8', '3' is '-2'. 2+3=?"));
if (userAnswer == 1) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '20', '2' is '5', '3' is '11'. 8+3=?"));
if (userAnswer == 3) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '12', '2' is '-13', '3' is '9'. 20-8=?"));
if (userAnswer == 1) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '51', '2' is '62', '3' is '45'. 40+5=?"));
if (userAnswer == 3) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '76', '2' is '88', '3' is '-25'. 79+9=?"));
if (userAnswer == 2) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '50', '2' is '62', '3' is '33'. 79-17=?"));
if (userAnswer == 2) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '23', '2' is '54', '3' is '71'. 80-9=?"));
if (userAnswer == 3) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '64', '2' is '24', '3' is '38'. 27+11=?"));
if (userAnswer == 3) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '9', '2' is '15', '3' is '12'. 3*3=?"));
if (userAnswer == 1) {
    answerCount++
}
var userAnswer = parseInt(prompt("Enter the number where '1' is '79', '2' is '44', '3' is '16'. 88/2=?"));
if (userAnswer == 2) {
    answerCount++
}
answerCount *= 1.2;
alert("Your mark is " + parseInt(answerCount));
*/
//task 1
/*
var volumeTank = parseFloat(prompt("Enter the volume of the tank in liters"));
var amountFuel = parseFloat(prompt("Enter the amount of fuel in the tank in liters"));
var weightGoods = parseFloat(prompt("Enter the weight of the goods in tons"));
var acDistance = parseFloat(prompt("Enter the distance from A to C in kilometers"));
var cbDistance = parseFloat(prompt("Enter the distance from C to B in kilometers"));

var totalDistance = acDistance + cbDistance;

if (volumeTank < amountFuel) {
    alert("Invalid input");
} else {
    if (weightGoods < 1) {
        var FUELCONSUMPTION = 0.25;
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) {
                alert("Too little fuel");
            } else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else {
                    alert("Fuel tank too small");
                }
            }
        } else {
            alert("You will reach the point B without stops at point C");
        }
    } else if (weightGoods < 2) {
        var FUELCONSUMPTION = 0.3;
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) {
                alert("Too little fuel");
            } else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else {
                    alert("Fuel tank too small");
                }
            }
        } else {
            alert("You will reach the point B without stops at point C");
        }
    } else if (weightGoods < 3) {
        var FUELCONSUMPTION = 0.35;
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) {
                alert("Too little fuel");
            } else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else {
                    alert("Fuel tank too small");
                }
            }
        } else {
            alert("You will reach the point B without stops at point C");
        }
    } else if (weightGoods < 4) {
        var FUELCONSUMPTION = 0.42;
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) {
                alert("Too little fuel");
            } else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else {
                    alert("Fuel tank too small");
                }
            }
        } else {
            alert("You will reach the point B without stops at point C");
        }
    } else if (weightGoods < 5) {
        var FUELCONSUMPTION = 0.5;
        var needTotalFuel = FUELCONSUMPTION * totalDistance;
        if (amountFuel < needTotalFuel) {
            var needFuelAcDistance = FUELCONSUMPTION * acDistance;
            if (amountFuel < needFuelAcDistance) {
                alert("Too little fuel");
            } else {
                var needFuelCbDistance = FUELCONSUMPTION * cbDistance;
                if (needFuelCbDistance <= volumeTank) {
                    alert("You need in the point C to fuel the " + (needFuelCbDistance - (amountFuel - needFuelAcDistance)).toFixed(2) + " liters");
                } else {
                    alert("Fuel tank too small");
                }
            }
        } else {
            alert("You will reach the point B without stops at point C");
        }
    } else {
        alert("Too heavy load");
    }
}
*/
//task 2

var toaster = parseInt(prompt("Есть ли у Вас тостер: 1-Yes, 2-No"));
var bread = parseInt(prompt("есть ли у вас хлеб: 1-Yes, 2-No"));

if (toaster + bread == 2) {

} else