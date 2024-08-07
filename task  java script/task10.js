function printMultiplicationTable() {
    var num = parseInt(document.getElementById("numberInput").value);
    var output = "";

    if (!isNaN(num)) {
        for (var i = 1; i <= 12; i++) {
            output += num + " x " + i + " = " + (num * i) + "<br/>";
        }
        document.getElementById("output").innerHTML = "<h2>Multiplication Table for " + num + ":</h2>" + output;
    } else {
        document.getElementById("output").innerText = "Please enter a valid integer.";
    }
}
