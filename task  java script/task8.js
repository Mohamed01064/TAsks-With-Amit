function checkVowelConsonant() {
    // Get the value from the input field
    var char = document.getElementById("charInput").value.toLowerCase();

    // Check if the character is a vowel or consonant
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        document.getElementById("output").innerText = "Vowel";
    } else if (char >= 'a' && char <= 'z') {
        document.getElementById("output").innerText = "Consonant";
    } else {
        document.getElementById("output").innerText = "Please enter a valid alphabet character.";
    }
}