function checkEvenOrOdd() {
    // Get the value from the input field
    var number = parseInt(document.getElementById("numberInput").value);

    var result;
    switch (number % 2) {
        case 0:
            result = number + " is even.";
            break;
        case 1:
        case -1: 
            result = number + " is odd.";
            break;
        default:
            result = "Invalid input.";
            break;
    }

    document.getElementById("output").innerText = result;
}