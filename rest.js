function getMinMaxSum(arr) {
    // Destructure the array to extract min, max, and sum
    const [min, max, sum] = arr.reduce(
        ([currentMin, currentMax, currentSum], num) => [
            Math.min(currentMin, num),
            Math.max(currentMax, num),
            currentSum + num,
        ],
        [Infinity, -Infinity, 0]
    );

    // Return the result as an object
    return { min, max, sum };
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = getMinMaxSum(numbers);
console.log(result); // { min: 1, max: 5, sum: 15 }
