function operate (op, x, y) {
    let result;
    switch (op) {
        case "sum":
            result = add(x, y);
            break;
        case "sub":
            result = subtract(x, y);
            break;
        case "mult":
            result = multiply(x, y);
            break;
        case "div":
            result = divide(x, y);
            break;
        default:
            console.log("ERROR");
    }
    return result;
}


function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y;
}

let a = operate("div", 5, 4)
console.log(a);
