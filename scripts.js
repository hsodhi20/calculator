const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".display-input");
let first = true;
let num1 = "", num2 = "", op = "";
let display = "0";

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const type = event.target.className;
        const buttonClicked = event.target.textContent;
        
        if (type === "num") {
            if (first) {
                num1 += buttonClicked;
                display = num1;
            } else {
                num2 += buttonClicked;
                display = num2;
            }
        } else if (type === "op") {
            if (op) {
                const ans = operate(Number(num1), op, Number(num2));
                num1 = ans.toString();
                num2 = "";
                display = num1 + " " + buttonClicked + " ";
            } else {
                display += " " + buttonClicked + " ";
            }
            op = buttonClicked;
            first = false;
        } else if (type === "equal") {
            if (op && num2) {
                const ans = operate(Number(num1), op, Number(num2));
                display = ans.toString();
                num1 = ans.toString();
                num2 = "";
                op = "";
                first = true;
            }
        } else if (type === "clear") {
            display = "0";
            num1 = "";
            num2 = "";
            op = "";
            first = true;
        } else if (type === "delete") {
            if (first) {
                num1 = num1.slice(0, -1);
                display = num1 || "0";
            } else {
                num2 = num2.slice(0, -1);
                display = num2 || "0";
            }
        }

        result.textContent = display;
        console.log(`num1: ${num1}`);
        console.log(`num2: ${num2}`);
        console.log(`op: ${op}`);
    });
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}
