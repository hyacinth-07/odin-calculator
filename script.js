const btn = document.querySelectorAll(".button");
const op = document.querySelectorAll(".op");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const del = document.querySelector("#del");
const prev = document.querySelector(".prevOperand");
const next = document.querySelector(".nextOperand");


btn.forEach(btn => {
    btn.addEventListener("click", function () {
        let val = btn.textContent;
        next.append(val);
    })
})


clear.addEventListener("click", function () {
        prev.replaceChildren();
        next.replaceChildren();
})

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
