function checkNumberSign() {
    // Get the value from the input field
    var number = parseFloat(document.getElementById("numberInput").value);

    // Determine if the number is positive, negative, or zero using switch case
    var result;
    switch (true) {
        case (number > 0):
            result = number + " is positive.";
            break;
        case (number < 0):
            result = number + " is negative.";
            break;
        case (number === 0):
            result = "The number is zero.";
            break;
        default:
            result = "Invalid input.";
            break;
    }

    // Display the result
    document.getElementById("output").innerText = result;
}
