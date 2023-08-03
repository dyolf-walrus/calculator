function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;
let displayValue = "";

function operate(a, b, c) {
    if (c == 'plus') {
        return add(a, b);
    } else if (c == 'minus') {
        return subtract(a, b);
    } else if (c == 'times') {
        return multiply(a, b);
    } else if (c == 'divide') {
        return divide(a, b);
    }
}

let display = document.getElementById("display")
display.textContent = displayValue;

const numInput = document.getElementsByClassName("number");

//to add numerical values to displayValue when 'number' buttons are clicked
for (i = 0; i < numInput.length; i++) {
    let num = numInput[i];
    numInput[i].addEventListener('click', function() {
        console.log(num.dataset.value);
        displayValue = displayValue + num.dataset.value;
        display.textContent = displayValue;
    })
}
