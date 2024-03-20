var num1 = prompt("Please enter the 1st number");
var num2 = prompt("Please enter the 2nd number");
var opr = prompt("Please select an operator among +, -, /, *");
switch (opr) {
    case "+":
        var resultAddition = parseFloat(num1) + parseFloat(num2);
        console.log("".concat(num1, " + ").concat(num2, " = ").concat(resultAddition));
        break;
    case "-":
        var resultSubtraction = parseFloat(num1) - parseFloat(num2);
        console.log("".concat(num1, " - ").concat(num2, " = ").concat(resultSubtraction));
        break;
    case "/":
        var resultDivision = parseFloat(num1) / parseFloat(num2);
        console.log("".concat(num1, " / ").concat(num2, " = ").concat(resultDivision));
        break;
    case "*":
        var resultMultiplication = parseFloat(num1) * parseFloat(num2);
        console.log("".concat(num1, " * ").concat(num2, " = ").concat(resultMultiplication));
        break;
    default:
        console.log("Invalid operator");
}
