function calculate() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    // Initialize result variable
    var result;

    // Perform the calculation using switch case
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            // Check if the divisor is zero
            if (num2 === 0) {
                result = "Error: Division by zero is not allowed.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Please select a valid operation.";
            break;
    }

    // Display the result
    document.getElementById("output").innerText = "Result: " + result;
}