var display = [];
var powerButton = false;

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
    if(display[0] === 0){ display = [] } 
    display.push(e);
    document.getElementById("screen").innerHTML = display.join("");
}

function clearScreen() {
    display = [0];
    document.getElementById("screen").innerHTML = display;
}

function equals() {
    display = display.join("")
    blip = display.split(/(\D[^.])/)
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

function power() {
    if(powerButton || display[0]){
        powerButton = false;
        display = []
    } else {
        powerButton = true;
        display = [0]
    }
    document.getElementById("screen").innerHTML = display;
}

function back() {
    display.pop();
    document.getElementById("screen").innerHTML = display.join("");
}

exports = {
    add,
    minus,
    times,
    divide,
    press,
    equals,
    clearScreen,
    power
}