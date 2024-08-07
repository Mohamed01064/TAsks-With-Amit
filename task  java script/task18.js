function findMaximum() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Initialize a variable to store the maximum number
    var max;

    // Determine the maximum number using switch case
    switch (true) {
        case (num1 > num2):
            max = num1;
            break;
        case (num2 > num1):
            max = num2;
            break;
        case (num1 === num2):
            max = "Both numbers are equal.";
            break;
        default:
            max = "Invalid input.";
            break;
    }

    // Display the result
    document.getElementById("output").innerText = "Maximum number: " + max;
}