// 1. Define the factorial function
function factorial(n: number): number {
  // 2. Check for negative input
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  // 3. Compute factorial using a loop
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 4. Example calls
console.log("factorial(0) =", factorial(0)); // 1
console.log("factorial(1) =", factorial(1)); // 1
console.log("factorial(5) =", factorial(5)); // 120
console.log("factorial(7) =", factorial(7)); // 5040

// Example that throws an error
try {
  console.log("factorial(-3) =", factorial(-3));
} catch (error) {
  console.error("Error:", (error as Error).message);
}