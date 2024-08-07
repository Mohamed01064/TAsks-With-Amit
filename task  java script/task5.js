function findMaxMin() {
    // Get the values from the input fields
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var num3 = parseInt(document.getElementById("number3").value);

    // Determine the maximum and minimum number
    var maxNumber = Math.max(num1, num2, num3);
    var minNumber = Math.min(num1, num2, num3);

    // Print the maximum and minimum numbers
    document.getElementById("output").innerText = "The maximum number is: " + maxNumber + "\nThe minimum number is: " + minNumber;
}