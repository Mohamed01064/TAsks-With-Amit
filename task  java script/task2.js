function checkDivisibility() {
    var number = document.getElementById("numberInput").value;

    
    if (number % 3 === 0 && number % 4 === 0) {
        document.getElementById("output").innerText = "Yes";
    } else {
        document.getElementById("output").innerText = "No";
    }
}