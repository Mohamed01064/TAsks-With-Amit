function printNumbers() {
    // Get the value from the input field
    var num = parseInt(document.getElementById("numberInput").value);
    var output = "";

    // Check if the number is greater than 1
    if (num > 1) {
        // Generate numbers between 1 and the input number
        for (var i = 1; i <= num; i++) {
            output += i + " ";
        }
        document.getElementById("output").innerText = "Numbers between 1 and " + num + ": " + output.trim();
    } else {
        document.getElementById("output").innerText = "Please enter a number greater than 1.";
    }
}