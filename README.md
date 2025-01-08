# JavaScript Function with Improper Input Handling

This repository demonstrates a common error in JavaScript: improper handling of unexpected input. The `operate` function does not handle cases where the operator is not one of +, -, *, /. This can lead to unexpected errors or incorrect results.

## Bug Description
The `operate` function uses a `switch` statement to handle different operators. However, it does not include a `default` case to handle unexpected operators. This means that if an unexpected operator is passed to the function, it will throw an error.  A more robust solution would handle invalid input gracefully.

## Bug Solution
The solution adds a `default` case to the `switch` statement, which handles unexpected operators by returning `NaN`. This prevents the function from throwing an error and provides a more predictable result.  The solution also adds input validation to check that a and b are numbers.

## How to reproduce the bug
1. Clone the repository
2. Run `node bug.js`
3. Observe the error messages

## How to fix the bug
1. Clone the repository
2. Run `node bugSolution.js`
3. Observe the improved error handling