// For this to be complete I want this work to have SASS (yet to be added) and testing
var display = [];

function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function times(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function press(e){
    display.push(e);
    document.getElementById("screen").innerHTML = display.join("");
}

function clearScreen() {
    display = [];
    document.getElementById("screen").innerHTML = display;
}

function equals() {
    display = display.join("")
    blip = display.split(/(\D)/)
    a = blip[0];
    b = blip[2];
    a = parseInt(a);
    b = parseInt(b);
    switch(blip[1]){
        case "+":
            display = add(a, b);
            document.getElementById("screen").innerHTML = display;
            break;
        case "-":
            display = minus(a, b);
            document.getElementById("screen").innerHTML = display;
            break;
        case "*":
            display = times(a, b);
            document.getElementById("screen").innerHTML = display;
            break;
        case "/":
            display = divide(a, b);
            document.getElementById("screen").innerHTML = display;
            break;
    }
}

exports = {
    add,
    minus,
    times,
    divide,
    press,
    equals,
    clearScreen
}