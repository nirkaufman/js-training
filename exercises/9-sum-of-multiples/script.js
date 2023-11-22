/*
  The `sumOfMultiples(curLimit)` function in JavaScript calculates the sum of all numbers up to a given limit (`curLimit`) that are multiples of either 3 or 5.

  Here's a step-by-step breakdown of what the function does:

  1. It accepts one parameter, `curLimit`, which represents the upper limit of the range of numbers to check.
  2. It initializes a variable `sumOfMultipleValue` to 0. This variable will hold the sum of the multiples of 3 or 5.
  3. It uses a `for` loop to iterate over each number from 0 up to `curLimit`.
  4. For each iteration, it checks if the current number (`i`) is a multiple of 3 or 5 by using the modulus operator (`%`). If `i` is divisible by 3 or 5 with no remainder, it's a multiple of 3 or 5.
  5. If the current number is a multiple of 3 or 5, it adds the number to `sumOfMultipleValue`.
  6. After the loop, it logs a message to the console with the sum of the multiples of 3 and 5 up to `curLimit`.
 */
function sumOfMultiples(curLimit) {
  // your code goes here
}

// usage:
sumOfMultiples(10); // 23
