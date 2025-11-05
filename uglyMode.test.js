// ✅ Passing test example
console.log("Running test 1: 2 + 2 === 4");
if (2 + 2 !== 4) {
  throw new Error("Test failed: 2 + 2 should be 4");
}

// ❌ Failing test example
console.log("Running test 2: Ugly mode should be ugly");
const isUgly = false; // intentionally wrong
if (isUgly !== true) {
  throw new Error("Test failed: Ugly mode was not ugly!");
}
