// For this to be complete I want this work to have SASS (yet to be added) and testing
function add(a, b){
    console.log("I'm in add")
    return a + b;
}

function minus(a, b){
    console.log("I'm in subtract")
    return a - b;
}

function times(a, b){
    console.log("I'm in multiply")
    return a * b;
}

function divide(a, b){
    console.log("I'm in division")
    return a/b;
}

module.exports = {
    add,
    minus,
    times,
    divide
}