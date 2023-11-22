/*
  The function `showPattern(totalRowsPatternCount)` in JavaScript is designed to print a pattern of asterisks (`*`) in the console. The pattern is a series of lines, each containing a number of asterisks equal to the line number. The total number of lines is determined by the argument `totalRowsPatternCount` passed to the function.

  Here's a step-by-step breakdown of what the function does:

  1. It accepts one parameter, `totalRowsPatternCount`, which represents the total number of lines in the pattern.
  2. It uses a `for` loop to iterate over each line number from 1 up to `totalRowsPatternCount`.
  3. For each line (`curRow`), it initializes an empty string `patternDesign`.
  4. It then uses another `for` loop to iterate over each position in the current line from 0 up to `curRow`.
  5. For each position in the line, it appends an asterisk (`*`) to `patternDesign`.
  6. After constructing the line, it logs `patternDesign` to the console.
  7. This process repeats until all lines have been logged, creating a pattern of asterisks where the number of asterisks in each line equals the line number.

  For example, if `totalRowsPatternCount` is 5, the output would be:
```
*
**
***
****
*****
```
 */
function showPattern(totalRowsPatternCount) {
  // Write your code here
}

// Example
showPattern(5); // Should print the following pattern: * ** *** **** *****
