function printDaysInMonth() {
    // Get the value from the input field
    var month = parseInt(document.getElementById("monthInput").value);
    var days;

    // Determine the number of days in the month
    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            days = 31;
            break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            days = 30;
            break;
        case 2: // February
            // Check if it is a leap year
            var year = new Date().getFullYear();
            days = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
            break;
        default:
            days = "Invalid month number. Please enter a number between 1 and 12.";
            break;
    }

    // Display the result
    document.getElementById("output").innerText = "Number of days: " + days;
}