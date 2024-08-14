function totalLegs(chickens, cows, pigs) {
    // Calculate the total number of legs
    const chickenLegs = chickens * 2;
    const cowLegs = cows * 4;
    const pigLegs = pigs * 4;

    // Return the sum of all legs
    return chickenLegs + cowLegs + pigLegs;
}

// Example usage:
console.log(totalLegs(5, 2, 3)); // Outputs: 26 (5*2 + 2*4 + 3*4)
console.log(totalLegs(1, 1, 1)); // Outputs: 10 (1*2 + 1*4 + 1*4)
console.log(totalLegs(10, 5, 2)); // Outputs: 48 (10*2 + 5*4 + 2*4)
