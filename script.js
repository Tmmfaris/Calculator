let result = document.getElementById("result");
let expression = "";

// Add number
function appendNumber(number) {
    expression += number;
    result.value = expression;
}

// Add operator
function appendOperator(operator) {

    // Prevent operator at beginning
    if (expression === "") return;

    let lastChar = expression.slice(-1);

    // Prevent multiple operators
    if (["+","-","*","/"].includes(lastChar)) {
        expression = expression.slice(0, -1);
    }

    expression += operator;
    result.value = expression;
}

// Clear display
function clearDisplay() {
    expression = "";
    result.value = "";
}

// Calculate result
function calculateResult() {

    if (expression === "") return;

    try {

        let evalResult = Function("return " + expression)();

        result.value = evalResult;
        expression = evalResult.toString();

    } catch {

        result.value = "Error";
        expression = "";

    }
}
