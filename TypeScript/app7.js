
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);  // Output: Cannot divide by zero!
}

