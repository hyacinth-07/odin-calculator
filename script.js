const btnNum = document.querySelectorAll(".num");
const op = document.querySelectorAll(".op");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const del = document.querySelector("#del");
const prev = document.querySelector(".prevOperand");
const next = document.querySelector(".nextOperand");
let operation;

// init calc

screenClear();

///// CLEAR SCREEN

clear.addEventListener("click", screenClear);

function screenClear () {
    prev.replaceChildren();
    next.replaceChildren();
    operation = "";
}

// APPEND NUMBERS

btnNum.forEach(btn => {
    btn.addEventListener("click", function () {
        let val = btn.textContent;
        if (val === "." && next.textContent.includes(".")) return;
        next.append(val);
    })
})

// CHOOSE OPERATION

op.forEach(btn => {
    btn.addEventListener("click", function () {
        let val = btn.textContent;
        if (next.childNodes.length == 0) return;    //check if empty
        if (next.textContent.includes(val)) return;
        next.append(val);
        val = val.replace(/\s/g, '');
        operation = val;
        chooseOp();
    })
})

function chooseOp () {
    let str = next.textContent;
    if (prev.childNodes.length !== 0) {
        operate();
    }
    prev.append(str);
    next.replaceChildren();
}

// OPERATE

equals.addEventListener("click", function () {
    operate();
})

function operate () {
    let result;
    const prevNum = parseFloat(prev.textContent);
    const nextNum = parseFloat(next.textContent);
    if (isNaN(prevNum) || isNaN(nextNum)) return;
    switch (operation) {
        case "+":
            result = prevNum + nextNum;
            break;
        case "-":
            result = prevNum - nextNum;
            break;
        case "×":
            result = prevNum * nextNum;
            break;
        case "÷":
            result = prevNum / nextNum;
            break;
        default:
            return;
    }
    prev.replaceChildren();
    next.replaceChildren();
    operation = "";
    next.append(result);
}

// DELETE

del.addEventListener("click", deleteKey)

function deleteKey () {
    let toDel = next.textContent;
    toDel = toDel.slice(0, -1);
    next.replaceChildren();
    next.append(toDel);
}