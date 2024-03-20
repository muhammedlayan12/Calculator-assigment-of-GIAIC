let num1:any = prompt("Please enter the 1st number");
let num2:any = prompt("Please enter the 2nd number");
let opr:any = prompt("Please select an operator among +, -, /, *");

switch (opr) {
    case "+":
        const resultAddition: number = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${resultAddition}`);
        break;

    case "-":
        const resultSubtraction: number = parseFloat(num1) - parseFloat(num2);
        console.log(`${num1} - ${num2} = ${resultSubtraction}`);
        break;

    case "/":
        const resultDivision: number = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${resultDivision}`);
        break;

    case "*":
        const resultMultiplication: number = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${resultMultiplication}`);
        break;

    default:
        console.log(`Invalid operator`);
}
