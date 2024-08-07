function findMax() {
   
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);

    // Determine the maximum number
    var maxNumber = (num1 > num2) ? num1 : num2;


    document.getElementById("output").innerText = "The maximum number is: " + maxNumber;
}