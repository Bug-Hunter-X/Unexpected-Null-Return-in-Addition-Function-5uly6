function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values
  b = b === null ? 0 : b; // Handle null values
  return a + b; // Perform addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0