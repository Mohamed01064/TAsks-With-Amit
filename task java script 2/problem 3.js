function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
}

// Example usage:
const mixedArray = [1, 'hello', 2, 'world', 3, 'foo', 4];
const numbersOnly = filterNumbers(mixedArray);
console.log(numbersOnly); // Outputs: [1, 2, 3, 4]
