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
let didYouEqual = false;

function operate(a, b, c) {
    if (c == '+') {
        return add(a, b);
    } else if (c == '-') {
        return subtract(a, b);
    } else if (c == '*') {
        return multiply(a, b);
    } else if (c == '/') {
        return divide(a, b);
    }
}

let display = document.getElementById("display")
display.textContent = displayValue;

const numInput = document.getElementsByClassName("number");
const opInput = document.getElementsByClassName("operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

//to add numerical values to displayValue when 'number' buttons are clicked
for (i = 0; i < numInput.length; i++) {
    let num = numInput[i];
    if (num1 && !operator) {
        displayValue = "";
    }
    numInput[i].addEventListener('click', function() {
        if (num1 && !operator && didYouEqual) {
            displayValue = "";
            console.log('im the problem')
            didYouEqual = false;
        }
        displayValue = displayValue + num.dataset.value;
        display.textContent = displayValue;
    })
}

//to add operator to displayValue when 'operator' buttons are clicked
for (i = 0; i < opInput.length; i++) {
    let op = opInput[i];
    opInput[i].addEventListener('click', function() {
        if (displayValue[displayValue.length - 1] == " " || displayValue === "") {
            return;
        }
        else if (!operator) {
            operator = op.dataset.value;
            displayValue = displayValue + " " + op.dataset.value + " ";
            display.textContent = displayValue;
        }
        else if (operator) {
            equaling();
            operator = op.dataset.value;
            displayValue = displayValue + " " + op.dataset.value + " ";
            display.textContent = displayValue;
        }
    })
}

//AC button
clear.addEventListener('click', function() {
    displayValue = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    display.textContent = displayValue;
})

//equals button
equals.addEventListener('click', function() {
    equaling();
})

function equaling() {
    splitDisplay(displayValue);
    if ((num1 || num1 == 0) && (num2 || num2 == 0) && operator) {
        displayValue = operate(num1, num2, operator)
        display.textContent = displayValue;
        operator = undefined;
        num1 = displayValue;
        didYouEqual = true;
    }
}

function splitDisplay(string) {
    let arr = string.split(" ")
    num1 = parseFloat(arr[0]);
    num2 = parseFloat(arr[2]);
    operator = arr[1];
}

//adding sound effects

const buttons = document.getElementsByTagName('button')
let audioArray = ['audio/catmeow1.wav', 'audio/catmeow2.mp3', 'audio/catmeow3.wav', 'audio/catmeow5.wav', 'audio/catmeow6.m4a', 'audio/catmeow7.wav', 'audio/catmeow8.wav', 'audio/catmeow9.ogg']

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let ranNum = Math.floor(Math.random() * 8)
        let sound = new Audio(audioArray[ranNum]);
        sound.play();
    })
}