function calculateResults() {
    // Get the values from the input fields
    var physics = parseFloat(document.getElementById("physics").value);
    var chemistry = parseFloat(document.getElementById("chemistry").value);
    var biology = parseFloat(document.getElementById("biology").value);
    var mathematics = parseFloat(document.getElementById("mathematics").value);
    var computer = parseFloat(document.getElementById("computer").value);

    // Calculate total, percentage, and determine grade
    var totalMarks = physics + chemistry + biology + mathematics + computer;
    var percentage = (totalMarks / 500) * 100; // Assuming each subject is out of 100
    var grade;

    // Determine the grade based on percentage
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Display the results
    document.getElementById("output").innerHTML = 
        "<h2>Results</h2>" +
        "Total Marks: " + totalMarks + "<br/>" +
        "Percentage: " + percentage.toFixed(2) + "%<br/>" +
        "Grade: " + grade;
}