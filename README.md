# Unexpected Null Return in Addition Function

This repository demonstrates a common, yet subtle bug in JavaScript related to null value handling. The `foo` function is designed to add two numbers, but its handling of null values leads to unexpected null returns. 

## Bug Description

The original `foo` function immediately returns `null` if either input is null. This isn't inherently wrong; however, it fails to perform the addition in scenarios where one number is null, and the other is valid.  This can cause unexpected behavior, especially within larger programs where proper arithmetic is expected.

## Solution

The bug is fixed by revising the conditional logic. Instead of returning `null` immediately when encountering null, the improved logic considers whether a value is null and replaces it with 0.  This maintains the functionality of handling nulls while ensuring valid addition can occur in all scenarios.  The improved code is found in `bugSolution.js`.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Open the `bug.js` and `bugSolution.js` files to examine the bug and the solution.
4. You can run the files using Node.js by running: `node bug.js` and `node bugSolution.js` separately