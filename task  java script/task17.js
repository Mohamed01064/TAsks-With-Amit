function checkAlphabet() {
    // Get the value from the input field
    var char = document.getElementById("charInput").value.toLowerCase();
    var result;

    // Validate that the input is a single alphabet character
    if (char.length !== 1 || !char.match(/[a-z]/i)) {
        result = "Please enter a single alphabet character.";
    } else {
        // Determine if the character is a vowel or consonant
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                result = char + " is a vowel.";
                break;
            default:
                result = char + " is a consonant.";
                break;
        }
    }

    // Display the result
    document.getElementById("output").innerText = result;
}
