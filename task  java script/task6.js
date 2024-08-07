function checkEvenOdd() {
    var number = parseInt(document.getElementById("numberInput").value);

    // Check if the number is even or odd
    if (number % 2 === 0) {
        document.getElementById("output").innerText = "Even";
    } else {
        document.getElementById("output").innerText = "Odd";
    }
}