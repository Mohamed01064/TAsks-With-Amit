function calculateResults() {
    var marks1 = parseFloat(document.getElementById("subject1").value);
    var marks2 = parseFloat(document.getElementById("subject2").value);
    var marks3 = parseFloat(document.getElementById("subject3").value);
    var marks4 = parseFloat(document.getElementById("subject4").value);
    var marks5 = parseFloat(document.getElementById("subject5").value);

    // Calculate total, average, and percentage
    var total = marks1 + marks2 + marks3 + marks4 + marks5;
    var average = total / 5;
    var percentage = (total / 500) * 100; // Assuming each subject is out of 100

    document.getElementById("output").innerHTML = 
        "<h2>Results</h2>" +
        "Total Marks: " + total + "<br/>" +
        "Average Marks: " + average.toFixed(2) + "<br/>" +
        "Percentage: " + percentage.toFixed(2) + "%";
}