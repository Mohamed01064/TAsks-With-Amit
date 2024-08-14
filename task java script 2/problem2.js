function sumOfDigits(number) {
    return String(number)
        .split('')          
        .map(Number)         
        .reduce((sum, digit) => sum + digit, 0); // Sum up the digits
}

// Example usage:
console.log(sumOfDigits(123));
console.log(sumOfDigits(456)); // Outputs: 15 (4 + 5 + 6)
console.log(sumOfDigits(789)); // Outputs: 24 (7 + 8 + 9)
