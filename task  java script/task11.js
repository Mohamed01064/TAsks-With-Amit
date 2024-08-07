function printEvenNumbers() {
    
    var num = parseInt(document.getElementById("numberInput").value);
    var output = "";

    if (!isNaN(num) && num > 1) {
        // Generate even numbers between 1 and the input number
        for (var i = 2; i <= num; i += 2) {
            output += i + " ";
        }
        document.getElementById("output").innerText = "Even numbers between 1 and " + num + ": " + output.trim();
    } else {
        document.getElementById("output").innerText = "Please enter a valid number greater than 1.";
    }
}