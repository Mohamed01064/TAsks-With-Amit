function checkNumber() {
  
    var number = parseInt(document.getElementById("numberInput").value);

   
    if (number < 0) {
        document.getElementById("output").innerText = "Negative";
    } else {
        document.getElementById("output").innerText = "Positive";
    }
}