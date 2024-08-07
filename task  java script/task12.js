function calculatePower() {
    // Get the values from the input fields
    var base = parseInt(document.getElementById("baseInput").value);
    var exponent = parseInt(document.getElementById("exponentInput").value);

    // Calculate the power
    var result = Math.pow(base, exponent);

    // Print the result
    document.getElementById("output").innerText = base + " raised to the power of " + exponent + " is: " + result;
}